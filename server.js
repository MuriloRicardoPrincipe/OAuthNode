const express = require('express');
const app = express();

app.use(express.json()); // para parsing de JSON

const port = 3000; // porta em que o servidor será executado

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Aqui você adicionaria uma lógica de autenticação real
    if (username === "admin" && password === "admin") {
      res.json({ token: "123456789" });
    } else {
      res.status(401).json({ message: "Autenticação falhou" });
    }
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});