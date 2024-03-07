const { createLogger, transports, format } = require('winston')

// logging function
const logger = createLogger({
  transports: [
    new transports.File({ //log of an api 
      filename: 'user.log',// this is a file get store the logs
      level: 'info',//level of logging message 
      format: format.combine(format.timestamp(), format.json(), format.printf(info => {
        return `${info.message}  ${info.timestamp} `
      })
      )
    })
  ]
});

module.exports = { logger }
