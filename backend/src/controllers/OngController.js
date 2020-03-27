const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*'); // * sel todos
        
        return response.json(ongs)
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf} = request.body;

    const id = generateUniqueId(); // gerar id auomatico em hexadecimal

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
    }
}