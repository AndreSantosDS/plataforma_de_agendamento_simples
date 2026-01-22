const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/appointment_simples');
    console.log('Conectou ao MongoDB com sucesso!');
};

main().catch(err => console.log('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;