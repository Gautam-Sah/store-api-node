require("dotenv").config()

require("express-async-errors")

const express = require("express")
const app = express()

const connectDB = require("./db/connect")

const productRouter = require("./routes/products")

const notFoundMiddleware = require("./middleware/not-found")
const errorMiddleware = require("./middleware/error-handler")

// middleware
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send(
    '<h1> store api <h1> <a href = "/api/v1/products" > products route </a>'
  )
})

app.use("/api/v1/products", productRouter)

// products routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.Mongo_URI)
    app.listen(port, console.log(` server is listening on port ${port}... `))
  } catch (error) {
    console.log(error)
  }
}

start()
