const express = require("express")
const promptController = require("../controllers/prompt-controller")
const routes = express.Router()

//routes.post('api/prompt', promptController.sendText)
routes.route('/api/prompt').all(promptController.sendText);

module.exports = routes