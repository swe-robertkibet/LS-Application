module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define('Project', {
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: true,
        },
        customerId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Project.associate = (models) => {
        Project.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            as: 'customer',
        });
    };

    return Project;
};