// filepath: d:\Javascript\lifehub-api\routes\taskRoutes.js
const express = require('express');
const router = express.Router();

// Exemplo de rota
router.get('/', (req, res) => {
    res.send('Rota de tarefas funcionando!');
});

module.exports = router;