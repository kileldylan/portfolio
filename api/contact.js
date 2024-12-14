const mysql = require('mysql2/promise');

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Connect to the MySQL database
      const connection = await mysql.createConnection({
        host: 'junction.proxy.rlwy.net',  // Replace with your host
        user: 'root',                     // Replace with your DB username
        password: 'eaOgStKMyXOpwtWxhGNUrFoEHHOqbejv',  // Replace with your DB password
        database: 'railway',              // Replace with your DB name
        port: 38145
      });

      // Insert the contact form data into the database
      const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
      await connection.execute(query, [name, email, message]);

      await connection.end();
      // Close the connection
      // Respond with success
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Database error:', error.message, error.stack);
      return res.status(500).json({
        error: 'Failed to send the message. Please try again later.',
      });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
};
