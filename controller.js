const { createNewUser } = require("./database")
const apiLogger = require ('./controller/logger')


// get
const getUserDetailsController = (request, response) => {
    response.send('Hello World')
}

// post
const createUserDetailsController = async (request, response) => {
    const data = request.body
    console.log(data);
    apiLogger.logger.log('info','Successfully message received')
    console.log();
    const userDetailsFromDb = await createNewUser(apiLogger.logger)
    response.send('message received')
}

module.exports = { getUserDetailsController, createUserDetailsController } 