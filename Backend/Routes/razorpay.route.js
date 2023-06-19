const express = require("express");
const Razorpay = require("razorpay");
require('dotenv').config();

const razorPayRoute = express.Router();

var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_SECRET });

razorPayRoute.post("/create-order", async (req, res) => {

  var options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: "receipt#1",
  };

  console.log(options);
  try {
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).send(order);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});


module.exports = {
  razorPayRoute
}


