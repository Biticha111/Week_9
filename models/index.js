// Connection to the database, database configuration
// provides info on the models we've defined to the rest of the app.

const { Sequelize } = require('sequelize')

const configuration = {
    'storage': 'feedback.sqlite',
    'dialect': 'sqlite',

}
const sequelizeDatabase = new Sequelize(configuration)

const createFeedbackModel = require('./feedback')
const feedbackModel = createFeedbackModel(sequelizeDatabase)

const models = {}
const feedbackModelName = feedbackModel.name
models[feedbackModelName] = feedbackModel // { 'Feedback': the object represents Feedback }
module.exports = models
