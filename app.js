import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido al sistema de gestión.' });
});

app.get('/aprendices', (req, res) => {
  res.json({ aprendices: ['Juan', 'Pedro', 'María', 'Ana', 'Luis'] });
});

app.get('/programas', (req, res) => {
  res.json({ programas: ['Ética', 'Matemáticas', 'Programación', 'Comunicación', 'Inglés'] });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});