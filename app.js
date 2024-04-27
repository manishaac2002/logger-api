import express from "express"
import controller from './controller.js'
import winston from "./middleware/winston.js"

const application = express()

// Middleware to log API requests
application.use((request, response, next) => {
  winston.apiLogger(request, response, next)
})

// Define routes
application.get('/getMessages', controller.getMessages)

const port = 6001;
application.listen(port, () => {
  console.log(`Server is running on the port ${port}`)
});
