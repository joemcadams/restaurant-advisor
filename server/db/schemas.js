const Mongoose = require('mongoose');

const foodSchema = new Mongoose.Schema({
    id: Mongoose.Schema.ObjectId,
    name: String,
    category: String,
    price: Number
})

const menuSchema = new Mongoose.Schema({
    id: Mongoose.Schema.ObjectId,
    food: [foodSchema]
})

const reviewSchema = new Mongoose.Schema({
    id: Mongoose.Schema.ObjectId,
    customer: { email: String },
    title: String,
    description: String,
    date: { type: Date, default: Date.now },
    rating: Number
})

const customerSchema = new Mongoose.Schema({
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


const restaurantSchema = new Mongoose.Schema({
    id: Mongoose.Schema.ObjectId,
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

const orderSchema = new Mongoose.Schema({
    id: Mongoose.Schema.ObjectId,
    date: { type: Date, default: Date.now },
    isDelivery: Boolean,
    isTakeOut: Boolean,
    order: [{ food: foodSchema, quantity: Number }]
})

module.exports = {
    customer: Mongoose.model('Customer', customerSchema),
    restaurant: Mongoose.model('Restaurant', restaurantSchema),
    review: Mongoose.model('Review', reviewSchema),
    menu: Mongoose.model('Menu', menuSchema),
    order: Mongoose.model('Order', orderSchema),
    food: Mongoose.model('Food', foodSchema)
}