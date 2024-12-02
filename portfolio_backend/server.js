import mysql from 'mysql';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // Example MySQL connection using environment variables
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    connection.connect((err) => {
      if (err) {
        res.status(500).json({ error: 'Database connection failed' });
        return;
      }

      const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
      connection.query(query, [name, email, message], (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Failed to save data' });
        } else {
          res.status(200).json({ message: 'Message sent successfully' });
        }
      });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
