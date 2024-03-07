const triggerApi =(request,response,next)=>{
  console.log(request.url);
  console.log('your called hello world api'); 
  next()
}

export default {
  triggerApi
}