import apiLogger from '../controller/logger.js';
import createNewUser from "../database/mysql.js";


const test = (request,response)=>{
  console.log("hey");
  const data = request.body
  console.log(data);
}

//get admin details
const getAdminDetailsController = async (request, response) => {
  // response.send('Hello World')
  const data = request.body
  console.log(data);
  // const loggerMessage = await createNewUser(data)
  // response.send('message received')
  //  apiLogger.logger.log('info', 'Successfully got logged',)
}

//crete new admin
const createNewAdmin = (request, response) => {
  response.send('this is mes from controller')
}

export default {
  getAdminDetailsController,
  createNewAdmin,
  test
}