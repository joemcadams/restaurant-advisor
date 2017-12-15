const express = require('express')
const bodyParser = require('body-parser')
const dbService = require('./db/databaseService')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

dbService.setup()
app.get('/Restaurants', (req, res) => {
    dbService.getAllRestaurants(res)
})

app.get('/Users/:user/:pass', (req, res) => {
	dbService.authenticateUser(req.params.user, req.params.pass, res)
})

app.post('/Review/:restaurant', (req, res) => {
	console.log(req.body)
	dbService.addReviewToRestaurant(req.body, req.params.restaurant, res)
})

module.exports = app;
