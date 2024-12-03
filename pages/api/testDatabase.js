const mysql = require('mysql2');

// Directly define database configuration
const dbConfig = {
  host: 'junction.proxy.rlwy.net',  // Replace with your host
  user: 'root',                     // Replace with your DB username
  password: 'eaOgStKMyXOpwtWxhGNUrFoEHHOqbejv',  // Replace with your DB password
  database: 'railway',              // Replace with your DB name
  port: 38145                       // Replace with your DB port
};

// Test connection
(async function testConnection() {
  try {
    console.log('Attempting to connect to the database...');
    const connection = mysql.createConnection(dbConfig);
    connection.connect((err) => {
      if (err) {
        console.error('Database connection failed:', err);
      } else {
        console.log('Database connection successful!');
      }
      connection.end(); // Close the connection
    });
  } catch (error) {
    console.error('Unexpected error:', error);
  }
})();
