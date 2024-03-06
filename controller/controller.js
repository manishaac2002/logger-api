import apiLogger from '../middleware/logger.js';


//get admin details
const getAdminDetailsController = (request, response) => {
  response.send('Hello World')
 const triggeredUrl =request.url
  // apiLogger.logger.log('info','Successfully got logged',triggeredUrl)
}

//crete new admin
const createNewAdmin = (request, response) => {
  response.send('this is mes from controller')
}

export default
  { getAdminDetailsController, createNewAdmin }