import * as express from 'express'
import { Database as db } from '../database'

const app = express()

app.get('/Restaurants', (req, res) => res.send(db.getAllRestaurants())

app.get('/Reviews', (req, res) => res.send(db.getAllReviews())

app.post('/Reviews', (req, res) => { db.addReview(req) })

app.post('/Orders', (req, res) => { db.placeOrder(req) })

app.get('Customers/:email/:password', (req, res) => { db.checkCustomer(email, password) })

app.post('/Customers', (req, res) => { db.addCustomer(req, res) })
