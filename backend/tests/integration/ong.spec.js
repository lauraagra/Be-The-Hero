const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); //zerar o banco antes de realizar o teste novamente
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato@apad.com.br",
            whatsapp: "11983432344",
            city: "São Paulo",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id'); // espera que dentro do response.body tenha uma variavel id
        expect(response.body.id).toHaveLength(8);
    });
});