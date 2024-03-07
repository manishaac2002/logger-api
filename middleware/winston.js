import winston from "winston";
import mysql from 'mysql2';
import TransportStream from 'winston-transport';
import dotenv from 'dotenv';
dotenv.config();

// Connection
const mysqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

const mysqlTransport = new TransportStream({
  name: 'mysql',
  log: function (info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    const { message, method, url } = info;
    const time = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format dateTime to YYYY-MM-DD HH:MM:SS

    mysqlConnection.query('INSERT INTO log_messages (message, time, method, url) VALUES (?, ?, ?, ?)', [message, time, method, url], (error, results, fields) => {
      if (error) {
        console.error("Error inserting log message:", error);
        return callback(error);
      }
      console.log("Log message inserted successfully:", message);
      callback(null, true);
    });
  }
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // Output logs to the console
    mysqlTransport // Store logs in the MySQL database
  ]
});

const apiLogger = (request, response, next) => {
  const { method, url } = request;
  const info = { message: 'Request received', method, url };
  logger.info(info);
  next();
};


export default { apiLogger };
