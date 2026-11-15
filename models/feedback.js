// define the feedback model - define the table in the database,
// and defines the structure of feedback objects in the code

const { DataTypes } = require("sequelize")

module.exports = (sequelizeDatabase) => {
    const Feedback = sequelizeDatabase.define(
        "Feedback",  // name of the table
        // An object that defines the columns in the table
        {
            name: {
                type: DataTypes.STRING,
                allowNUll: true

            },
            email: {
                type: DataTypes.STRING,
                allowNUll: true

            },
            comments: {
                type: DataTypes.STRING,
                allowNUll: false
            },
            isCurrentStudent: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            departments: {
                type: DataTypes.JSON,
                allowNull: true,
                defaultValue: []
            },

            // Sequelize will create ID and a createAt column by default
        })

    Feedback.sync({force: false}).then(() => console.log("Create Feedback table"))

    return Feedback // return the object that define the table.
}