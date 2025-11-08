import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';

dotenv.config(); // Carga las variables del .env

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// Inicia el servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Conexión exitosa a PostgreSQL 🟢', time: result.rows[0].now });
  } catch (error) {
    console.error('Error al conectar con PostgreSQL:', error);
    res.status(500).json({ error: 'No se pudo conectar a la base de datos 🔴' });
  }
});

