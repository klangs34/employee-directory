const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true
   },
   name: {
        type: String,
        required: true
   },
   phone: {
       type: String,
       require: true
   },
   email: {
       type: String,
       required: true
   },
   company: {
       type: String,
       required: true
   }
});

const Employees = mongoose.model('employee', EmployeeSchema);

module.exports = Employees;