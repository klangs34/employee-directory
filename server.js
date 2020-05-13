const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/employee-directory',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    //for when connected in Heroku
    app.use(express.static("client/build"));
  }

const apiRoutes = require('./routes/apiRoutes');

app.use('/api', apiRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//no route found? create 404 error;
app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
})

//error handle middleware
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
        error: {
            message: err.message || "Something went wrong!!"
        }
    })
})

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
})

