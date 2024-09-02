// 3rd party libraries
const express = require("express")
const bodyParser = require("body-parser")
// const redis = require("redis")

// own files
require("./config/config")

// create app instance and get port
const app = express()
const PORT = process.env.PORT

// const redisClient = redis.createClient({ url: process.env.REDIS_URL })
// redisClient.on("error", (error) => {
//   console.log("Redis client Error", error)
// })
// redisClient.on("connect", () => {
//   console.log("Redis client connected successfully")
// })
// redisClient.connect()

// configure app
app.use(bodyParser.json())
app.get("/", (req, res, next) => {
  // redisClient.set("product", "products")
  res.send("<h1>Hello world hello newest 2! Using docker hub 2</h1>")
})

app.get("/data", async (req, res, next) => {
  // const data = await redisClient.get("product")
  // console.log("The data 2:", data)
  // res.send(data)
})

// bind app to the PORT
const server = app.listen(PORT, () => {
  console.log(
    `app is up and running in the ${process.env.NODE_ENV} mode on port ${PORT} successfully !!`
  )
})

module.exports = server
