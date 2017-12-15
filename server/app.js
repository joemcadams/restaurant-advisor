const express = require('express')
const dbService = require('./db/databaseService')
const app = express()

dbService.setup()
app.get('/Restaurants', (req, res) => {
    dbService.getAllRestaurants(res)
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
