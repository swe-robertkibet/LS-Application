// src/models/index.js
const { sequelize, Sequelize } = require('../config/database');

const Customer = require('./customer')(sequelize, Sequelize);
const Project = require('./project')(sequelize, Sequelize);

// Set up associations
Customer.associate({ Project });
Project.associate({ Customer });

module.exports = {
    sequelize,
    Sequelize,
    Customer,
    Project
};