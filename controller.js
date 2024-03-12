import winston from "./middleware/winston.js";

const getMessages = (request, response) => {
  // Call the apiLogger middleware
  // winston.apiLogger(request, response, () => {
  // This is the route handler logic
  response.send('Hello World');
  // });
};

export default {
  getMessages
};
