var MongoClient = require('mongodb').MongoClient

const DB_PORT = 8000
const CONNECTION_URL = `mongodb://localhost:${DB_PORT}/restaurant-advisor`

const connect = () => MongoClient.connect(CONNECTION_URL, (err, db) => {
    if (!err) console.log('Connected!')
    else ('Couldn\'t connect!')
    return db
})

module.exports = connect