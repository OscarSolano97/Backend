import express from 'express';
const app = express();
const port = 3000;
//const host = '10.5.225.150';

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido al sistema de gestión.' });
});

app.get('/aprendices', (req, res) => {
  res.json({ aprendices: ['Juan', 'Pedro', 'María', 'Ana', 'Luis'] });
});

app.get('/programas', (req, res) => {
  res.json({ programas: ['Ética', 'Matemáticas', 'Programación', 'Comunicación', 'Inglés'] });
});

app.listen(port,"0.0.0.0", () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});