const express = require('express')
const DB = require('./services/databaseService')
const app = express()

DB.initialize()

app.get('/', (req, res) => res.send("Go to localhost:3000"))

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
//     streetName: "W. Wisconsin Ave.",
//     city: "Milwaukee",
//     state: "Wisconsin",
//     zip: "53233",
// }]

app.get('/Restaurants', (req, res) => DB.getRestaurants(res))

module.exports = app;
