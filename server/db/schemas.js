var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    email: String,
    fName: String,
    mInit: String,
    lName: String,
    password: String,
    streetNo: String,
    streetName: String,
    city: String,
    state: String,
    zip: Number,
    reviews: [reviewSchema]
})

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
    reviews: [reviewSchema],
    menu: menuSchema
})

var reviewSchema = new mongoose.Schema({
    id: ObjectId,
    customer: { email: String },
    title: String,
    description: String,
    date: { type: Date, default: Date.now },
    rating: Number
})

var foodSchema = new mongoose.Schema({
    id: ObjectId,
    name: String,
    category: String
})

var menuSchema = new mongoose.Schema({
    id: ObjectId,
    food: [foodSchema],
    price: Number
})

var orderSchema = new mongoose.Schema({
    id: ObjectId,
    date: { type: Date, default: Date.now },
    isDelivery: Boolean,
    isTakeOut: Boolean,
    order: [{ food: foodSchema, quantity: Number }]
})

module.exports.default = {
    customer: customerSchema,
    restaurant: restaurantSchema,
    review: reviewSchema,
    menu: menuSchema,
    order: orderSchema
}