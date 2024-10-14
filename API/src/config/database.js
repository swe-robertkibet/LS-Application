// src/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('lsapplication', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    logging: console.log // This will log SQL queries to the console
});

const connectToDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = { sequelize, connectToDb, Sequelize };