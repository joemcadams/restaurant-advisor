var express = require('express');

var app = express();

app.get('/', (req, res) => res.send("Hello World"))

const rest = [
	{
	name: "Tony's Balogna Pony",
    diningType: "Fast Food",
    hours: "9AM-5PM",
    priceRange: "5-35",
    offersDelivery: true,
    outdoors: true,
    email: "tony@bologna.pony",
    phone: "414-323-4444",
    streetNo: 42,
    streetName: "W. Wisconsin Ave.",
    city: "Milwaukee",
    state: "Wisconsin",
    zip: "53233",
},{
	name: "Red Rocket",
    diningType: "Fast Food",
    hours: "9AM-5PM",
    priceRange: "5-35",
    offersDelivery: true,
    outdoors: true,
    email: "tony@bologna.pony",
    phone: "414-323-4444",
    streetNo: 42,
    streetName: "W. Wisconsin Ave.",
    city: "Milwaukee",
    state: "Wisconsin",
    zip: "53233",
}]

app.get('/Restaurants', (req, res) => res.send(rest))

module.exports = app;
