import express from "express"

const application = express()

application.use(express.json())

const port = 6001
application.listen(port, () => {
  console.log(`Server is running on the port ${port}`)
})
