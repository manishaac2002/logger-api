const triggerApi = (request, response, next) => {
  const url = request.url
  console.log('your called hello world api');
  next()
}

export default {
  triggerApi
}