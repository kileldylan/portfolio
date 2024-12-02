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
      port: process.env.DB_PORT, 
    });

    
    connection.connect((err) => {
      if (err) {
        console.error('Database connection failed:', err);
        res.status(500).json({ error: 'Database connection failed' });
        return;
      }

      const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
      connection.query(query, [name, email, message], (err, result) => {
        if (err) {
          console.log({ name, email, message });
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
