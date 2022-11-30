const express = require('express');
const user = require('./user');
const router = express.Router();

const resposta = {
    message: 'Rota de nome rota'
}

router.get('/rota', (req, res) => {
    res.json(resposta);
})

router.post('/criar', async (req, res) => {
    const { nome, login, senha } = req.body;
    const novoUsuario = await user.create({ nome, login, senha });
    res.status(201).json(novoUsuario);
})

router.put('/atualizar', async (req, res) => {
    const { id, nome, login, senha } = req.body;
    const usuarioAtualizado = await user.update({ nome, login, senha }, { where: { id: id } });
    res.status(200).json(usuarioAtualizado);
})

router.get('/todos', async (req, res) => {
    const users = await user.findAll({ raw: true });
    res.status(200).json(users);
})

router.delete('/deletar/:id', async (req, res) => {
    const id = req.params.id;
    await user.destroy({ where: { id: id} });
    res.status(200).json({ message: 'Usuário removido' });
});

module.exports = router;