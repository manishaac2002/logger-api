import apiLogger from '../controller/logger.js';
import createNewUser from "../database/mysql.js";

//get admin details
const getAdminDetailsController = async (request, response) => {
  response.send('Hello World')
 apiLogger.logger.log('info', 'Successfully got logged',)
}

//crete new admin
const createNewAdmin = (request, response) => {
  response.send('this is mes from controller')
}

export default
  { getAdminDetailsController, createNewAdmin }