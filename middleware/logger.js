import { createLogger, transports, format } from 'winston'

// logging function
const logger = createLogger({

  transports: [
    new transports.File({ //log of an api 
      filename: 'user.log',// this is a file get store the logs
      level: 'info',//level of logging message 
      format: format.combine(format.timestamp(), format.json())
    }), new transports.File({ //if error occurs api logs store here
      filename: 'user-error.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.json())
    })
  ]
});

export default {
  logger
}
