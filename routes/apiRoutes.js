const express = require('express');
const Router = express.Router();
const db = require('../models');

Router.get('/get-employees', (req, res, next) => {
    //query database for employees
    try {
        db.Employees.find({}).then(data => res.json(data));
    } catch (error) {
        next(error)
    }
});

module.exports = Router;