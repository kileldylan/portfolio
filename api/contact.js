import mysql from 'mysql2'; // Prefer mysql2 for better support and promise API

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Database connection settings using environment variables
    const connectionConfig = {
      host: process.env.DB_HOST, // From Railway's "Connect" tab
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306, // Railway's MySQL default port
      ssl: {
        rejectUnauthorized: true, // Ensures secure connection
      },
    };

    try {
      // Create the connection
      const connection = mysql.createConnection(connectionConfig);

      // Open the connection
      connection.connect((err) => {
        if (err) {
          console.error('Database connection error:', err.message);
          res.status(500).json({ error: 'Database connection failed' });
          return;
        }

        console.log('Database connected successfully!');

        // SQL query to insert data
        const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
        connection.query(query, [name, email, message], (error, results) => {
          if (error) {
            console.error('Error executing query:', error.message);
            res.status(500).json({ error: 'Failed to save data to the database' });
          } else {
            res.status(200).json({ message: 'Message sent successfully', data: results });
          }
          connection.end(); // Close the connection after the query
        });
      });
    } catch (err) {
      console.error('Unexpected error:', err.message);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
