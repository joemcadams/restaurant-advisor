var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    id: ObjectId,
    name: String,
    phone: String,
    email: String,
    hours: String,
    diningType: String,
    streetNo: Number,
    streetName: String,
    city: String,
    state: String,
    zip: Number,
    priceRange: String,
    offersDelivery: Boolean,
    outdoorSeating: Boolean,
    reviews: Array
})

var foodSchema = new mongoose.Schema({
    id: ObjectId,
    name: String,
    category: String
})

var menuSchema = new mongoose.Schema({
    id: ObjectId

})