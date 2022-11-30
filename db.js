const { Sequelize } = require('sequelize');

const conexao = new Sequelize(
    "minicurso",
    'root',
    '12345',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = conexao;