import mysql from "mysql2"
import dotenv from 'dotenv';
dotenv.config()

// connection
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,//specify the port number 
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME
}).promise()

const createNewUser = async (data) => {
  const result = await pool.query(`INSERT INTO log_messages (message, time, endpoint_api) 
  VALUES (?, ?, ?)`, [message, time, endpoint_api])
  return result
}


pool.getConnection((error, connection) => {
  if (error) {
    console.log(error, "Error in connecting with database");
  } else {
    console.log("Database connected successfully");
  }
})

pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

export default createNewUser