module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('Customer', {
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        address: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
    });

    Customer.associate = (models) => {
        Customer.hasMany(models.Project, {
            foreignKey: 'customerId',
            as: 'projects',
        });
    };

    return Customer;
};