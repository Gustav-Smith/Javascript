const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const user = new User({ nome, email, senha });
    await user.save();
    res.status(201).json({ msg: 'Usuário criado com sucesso' });
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao criar usuário', detalhes: err });
  }
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ erro: 'Usuário não encontrado' });

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) return res.status(401).json({ erro: 'Senha incorreta' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.json({ token, user: { id: user._id, nome: user.nome, email: user.email } });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ erro: 'Erro interno no login', detalhes: err.message });
  }
});

module.exports = router;
