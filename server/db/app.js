import { MongoClient } from 'mongodb'

const DB_PORT = 8000
const CONNECTION_URL = `mongodb://localhost:${DB_PORT}/restaurant-advisor`

export const DB = {
    connect: MongoClient.connect(CONNECTION_URL, (err, db) => {
        if (!err) console.log('Connected!')
        else ('Couldn\'t connect!')
        return db
    })
}