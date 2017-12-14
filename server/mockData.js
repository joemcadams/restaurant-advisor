const Mongoose = require('mongoose')
const Schemas = require('./db/schemas')

module.exports = {
    restaurants: [ new Schemas.restaurant({
        id: Mongoose.Types.ObjectId(),
        name: "Tony's Balogna Pony",
        phone: "414-323-4444",
        email: "tony@bologna.pony",
        hours: "9AM-5PM",
        diningType: "Fast Food",
        streetNo: 42,
        streetName: "W. Wisconsin Ave.",
        city: "Milwaukee",
        state: "Wisconsin",
        zip: "53233",
        priceRange: "5-35",
        offersDelivery: true,
        outdoorSeating: true,
        reviews: [ new Schemas.review({
            id: Mongoose.Types.ObjectId(),
            customer: { email: "joe@smells.van" },
            title: "Pretty Good!",
            description: "I really enjoyed it here. The Balogna is top-notch!",
            rating: 4
        })],
        menu: new Schemas.menu({ 
            id: Mongoose.Types.ObjectId,
            food: [
                new Schemas.food({ id: Mongoose.Types.ObjectId(), name: "Balogna Fries", price: 2.50, category: 'Lunch'}),
                new Schemas.food({ id: Mongoose.Types.ObjectId(), name: "Balogna Steak", price: 9.50, category: 'Lunch'}),
                new Schemas.food({ id: Mongoose.Types.ObjectId(), name: "Balogna Mash", price: 7.50, category: 'Lunch'}),
                new Schemas.food({ id: Mongoose.Types.ObjectId(), name: "Balogna Fish", price: 12.50, category: 'Dinner'}),
                new Schemas.food({ id: Mongoose.Types.ObjectId(), name: "Balogna Spaghetti", price: 6.0, category: 'Dinner'}),
                new Schemas.food({ id: Mongoose.Types.ObjectId(), name: "Balogna Tea", price: 2.50, category: 'Drinks'}),
                new Schemas.food({ id: Mongoose.Types.ObjectId(), name: "Balogna Covfefe", price: 2.50, category: 'Drinks'}),
                new Schemas.food({ id: Mongoose.Types.ObjectId(), name: "Balogna Soda", price: 1.50, category: 'Drinks'})
            ]
        })
    })]
}