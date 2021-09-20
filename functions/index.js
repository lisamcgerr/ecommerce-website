import {loadStripe} from '@stripe/stripe-js'

const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('pk_test_51JXqXUH6myHdM06N0pPqE5GGUb2SqAHboNdolxPEJw7OPHtWPeFKBQwv8HRPqqvqfCNqeN3Ioa1HAlolKbGGQdAU00DcvKz1o1')
//const stripePromise = loadStripe('pk_test_51JXqXUH6myHdM06N0pPqE5GGUb2SqAHboNdolxPEJw7OPHtWPeFKBQwv8HRPqqvqfCNqeN3Ioa1HAlolKbGGQdAU00DcvKz1o1')

// api

// app config
const app = express()

// middleware
app.use(cors({ origin: true }))
app.use(express.json())

// api routes (aspi below)
// http://localhost:5001/ecommerce-website-347a6/us-central1/api
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log('payment request recieved', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    // 201 - the request has succeeded and has led to the creation of a resource
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// listen command
exports.api = functions.https.onRequest(app)
