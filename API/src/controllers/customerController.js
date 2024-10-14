// src/controllers/customerController.js
const { Customer, Project } = require('../models');

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll({
            include: {
                model: Project,
                as: 'projects'  // This should match the alias in your Customer model
            }
        });
        res.json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ message: error.message });
    }
};


exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id, { include: Project });
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            await customer.update(req.body);
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            await customer.destroy();
            res.json({ message: 'Customer deleted' });
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
