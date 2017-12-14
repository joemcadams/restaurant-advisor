const MongoClient = require('mongodb').MongoClient
const Mongoose = require('mongoose')
const Schemas = require('../db/schemas')
const Tables = require('../db/tables')
const mockData = require('../mockData')

const DB_PORT = 27017
const CONNECTION_URL = `mongodb://localhost:${DB_PORT}`
 
const handleConnectionError = err => { throw `Unable to connect to Mongo instance @ ${CONNECTION_URL}:\n${JSON.stringify(err)}` }

const DB = {
    initialize: () => Mongoose.connect(CONNECTION_URL, (err) => {
        if (!err) console.log(`Successfully connected to mongo instance @ ${CONNECTION_URL}!\n`)
        mockData.restaurants.forEach(restaurant => restaurant.save(err => { 
            if (!err) console.log(`Successfully saved Restaurant ${restaurant.name}`)
            else throw `Unable to save object ${restaurant.name} to db`
        }))
    }),
    getRestaurants: res => {
        Mongoose.connect(CONNECTION_URL, (err) => {
            if (!err) { 
                console.log('Request for restaurants')
                res.send('HI!!!!!')
                // Schemas.restaurant.find().then(results => res.send(JSON.stringify(results)))
            }
            else handleConnectionError(err)
        })
    }
}

module.exports = DB