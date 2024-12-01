const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name is a must"],
  },
  price: {
    type: Number,
    required: [true, "price is must"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      meesage: "{VALUE} is not supported",
    },
  },
})

module.exports = mongoose.model("product", productSchema)
