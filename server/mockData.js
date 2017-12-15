const customers = [{
    email: 'joe@smells.van',
    fName: 'Joe',
    mInit: 'p',
    lName: 'Smells',
    password: 'fucktrump',
    streetNo: '123',
    streetName: 'Fuck Trump',
    city: 'Milwaukee',
    state: 'Wisconsin',
    zip: 53233
}, {
    email: 'praveen@madiraju.db',
    fName: 'Praveen',
    mInit: 'e',
    lName: 'Madiraju',
    password: 'fucktrump',
    streetNo: '123',
    streetName: 'Fuck Trump',
    city: 'Milwaukee',
    state: 'Wisconsin',
    zip: 53233
}]

const restaurants = [{
    _id: 1,
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
    reviews: [{
        customer: { email: customers[0].email },
        title: "Pretty Good!",
        description: "I really enjoyed it here. The Balogna is top-notch!",
        rating: 4
    }, {
        customer: { email: customers[1].email },
        title: "Pretty Good!",
        description: "I enjoyed it here. The Balogna is middle-notch.",
        rating: 3
    }],
    menu: { 
        food: [
            { name: "Balogna Fries", price: 2.50, category: 'Lunch', description: "Delicious, tasty food!"},
            { name: "Balogna Steak", price: 9.50, category: 'Lunch', description: "Delicious, tasty food!"},
            { name: "Balogna Mash", price: 7.50, category: 'Lunch', description: "Delicious, tasty food!"},
            { name: "Balogna Fish", price: 12.50, category: 'Dinner', description: "Delicious, tasty food!"},
            { name: "Balogna Spaghetti", price: 6.0, category: 'Dinner', description: "Delicious, tasty food!"},
            { name: "Balogna Tea", price: 2.50, category: 'Drinks', description: "A delicious, tasty drink!"},
            { name: "Balogna Covfefe", price: 2.50, category: 'Drinks', description: "A delicious, tasty drink!"},
            { name: "Balogna Soda", price: 1.50, category: 'Drinks', description: "A delicious, tasty drink!"}
        ]
    }
}]

module.exports = {
    customers: customers,
    restaurants: restaurants
}