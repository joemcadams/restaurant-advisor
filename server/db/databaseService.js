const MongoClient = require('mongodb').MongoClient
const Tables = require('./tables')
const MockData = require('../mockData')

const DB_NAME = 'restaurant-advisor'
const CREDENTIALS = 'admin:praveenisn1ce'
const CONNECTION_URL = `mongodb://${CREDENTIALS}@ds137686.mlab.com:37686/${DB_NAME}`

const handleConnectionError = err => { throw `Unable to connect to Mongo instance @ ${CONNECTION_URL}:\n${JSON.stringify(err)}` }

const validateInitialData = () => {
    MongoClient.connect(CONNECTION_URL, (err, dbClient) => {
        if (err) handleConnectionError(err)
        const db = dbClient.db(DB_NAME)
        MockData.customers.forEach(customer => {
            db.collection(Tables.customer).find({ 'email': customer.email }).toArray((err, result) => {
                result.length > 0
                    ? console.log(`DB holds value for ${result[0].email}, skipping add.`)
                    : db.collection(Tables.customer).insertOne(customer, (err, result) => {
                        err 
                            ? console.log(`Unable to save customer ${result[0].email} to DB\,${err}`)
                            : console.log(`Successfully saved customer ${result[0].email} to table ${Tables.customer}`)
                    })
            })
        })
        MockData.restaurants.forEach(restaurant => {
            db.collection(Tables.restaurant).find({ 'name': restaurant.name }).toArray((err, result) => {
                result.length > 0
                    ? console.log(`DB holds value for ${result[0].email}, skipping add.`)
                    : db.collection(Tables.restaurant).insertOne(restaurant, (err, result) => {
                        err 
                            ? console.log(`Unable to save restaurant ${result[0].name} to DB\,${err}`)
                            : console.log(`Successfully saved restaurant ${result[0].name} to table ${Tables.restaurant}`)
                    })
            })
        })
    })
}

const getAllRestaurants = (res) => {
    MongoClient.connect(CONNECTION_URL, (err, dbClient) => {
        if (err) handleConnectionError(err)
        const db = dbClient.db(DB_NAME)
        db.collection(Tables.restaurant).aggregate().toArray((err, result) => {
            err
                ? res.status(501).send({ error: `Unable to process request, entries don't exist.`})
                : res.status(200).send(result)
        })
    })
}

const addReviewToRestaurant = (review, restaurantName, res) => {
    MongoClient.connect(CONNECTION_URL, (err, dbClient) => {
        if (err) handleConnectionError(err)
        const db = dbClient.db(DB_NAME)
        db.collection(Tables.restaurant).update({ name: restaurantName }, { '$push': { "reviews": review }}, (err, result) => {
            err ? res.status(404) : res.status(200)
        })
    })

}

const authenticateUser = (userEmail, password, res) => {
    MongoClient.connect(CONNECTION_URL, (err, dbClient) => {
        if (err) handleConnectionError(err)
        const db = dbClient.db(DB_NAME)
        db.collection(Tables.customer).find({ email: userEmail, password: password }).toArray((err, result) => {
            err
                ? res.status(501).send({ error: `Unable to process request, entries don't exist.`})
                : result.length > 0
                    ? res.status(200).send(true)
                    : res.status(404).send(false)
        })
    })
}

const addUser = (user, res) => {
    MongoClient.connect(CONNECTION_URL, (err, dbClient) => {
        if (err) handleConnectionError(err)
        const db = dbClient.db(DB_NAME)
        db.collection(Tables.customer).insertOne(user, (err, result) => err ? res.status(401) : res.status(200))
    })
}

const addOrderToRestaurant = (restaurantName, order, res) => {
    MongoClient.connect(CONNECTION_URL, (err, dbClient) => {
        if (err) handleConnectionError(err)
        const db = dbClient.db(DB_NAME)
        db.collection(Tables.restaurant).update({ name: restaurantName }, { '$push': { "orders": order }}, (err, result) => {
            err ? res.status(404) : res.status(200)
        })
    })
}

const setupDbService = db => validateInitialData(db)

module.exports = {
    setup: setupDbService,
    getAllRestaurants: getAllRestaurants,
    addReviewToRestaurant: addReviewToRestaurant,
    addOrderToRestaurant: addOrderToRestaurant,
    addUser: addUser,
    authenticateUser: authenticateUser
}