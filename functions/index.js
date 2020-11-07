const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HSPjQLlgXiGBP1wJGWVhUdvrHsuPWo41oGyiQCptYnAVZFNIv97CwPaj5gxlei6U0IYqA6a4CIzzL8gna7y2oUn00LUoawSom'
);

// API
const app = express();
// App config
app.use(cors({ origin: true }));
app.use(express.json());

// APi routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Received!!! for this amount', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/example-project-b9e76/us-central1/api
