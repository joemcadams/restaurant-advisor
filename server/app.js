const express = require('express')
const Mongoose = require('mongoose')
const Schemas = require('./db/schemas')
const mockData = require('./mockData')
const app = express()

const DB_PORT = 27017
const CONNECTION_URL = `mongodb://admin:fuckmarquette>@ds137686.mlab.com:37686/restaurant-advisor`
 
const handleConnectionError = err => { throw `Unable to connect to Mongo instance @ ${CONNECTION_URL}:\n${JSON.stringify(err)}` }

Mongoose.connect(CONNECTION_URL, (err) => {
    if (!err) console.log(`Successfully connected to mongo instance @ ${CONNECTION_URL}!\n`)
}).then(db => {
    mockData.restaurants.forEach(restaurant => restaurant.save(err => { 
        if (!err) console.log(`Successfully saved Restaurant ${restaurant.name}`)
        else throw `Unable to save object ${restaurant.name} to db`
    }))

    app.get('/', (req, res) => res.send("Go to localhost:3000"))
    
    app.get('/Restaurants', (req, res) => {
        Schemas.restaurant.find({}, (err, results) => res.send(results))
    })
})


// const rest = [
// 	{
// 	name: "Tony's Balogna Pony",
//     diningType: "Fast Food",
//     hours: "9AM-5PM",
//     priceRange: "5-35",
//     offersDelivery: true,
//     outdoors: true,
//     email: "tony@bologna.pony",
//     phone: "414-323-4444",
//     streetNo: 42,
//     streetName: "W. Wisconsin Ave.",
//     city: "Milwaukee",
//     state: "Wisconsin",
//     zip: "53233",
// },{
// 	name: "Red Rocket",
//     diningType: "Fast Food",
//     hours: "9AM-5PM",
//     priceRange: "5-35",
//     offersDelivery: true,
//     outdoors: true,
//     email: "tony@bologna.pony",
//     phone: "414-323-4444",
//     streetNo: 42,
//     streetNo: 42,
//     streetName: "W. Wisconsin Ave.",
//     city: "Milwaukee",
//     state: "Wisconsin",
//     zip: "53233",
// }]


module.exports = app;
