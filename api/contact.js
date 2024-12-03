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
        host: process.env.MYSQLHOST, // From Vercel's environment variables
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQLPORT,
      });

      // Insert the contact form data into the database
      const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
      await connection.execute(query, [name, email, message]);

      // Close the connection
      await connection.end();

      // Respond with success
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({
        error: 'Failed to send the message. Please try again later.',
      });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
};
