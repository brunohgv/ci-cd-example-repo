const app = require('./app')
const request = require('supertest')

describe('Test /gettings', () => {
    it('Test the greetings api receiving a name', async () => {
        const response = await request(app).get('/greetings/Bruno')

        expect(response.body).toEqual({message: "Hello Bruno!"})
        expect(response.status).toBe(200)
    })


    it('Test the greetings api receiving a second name', async () => {
        const response = await request(app).get('/greetings/bruno-vasconcelos')

        expect(response.body).toEqual({message: "Hello bruno-vasconcelos!"})
        expect(response.status).toBe(200)
    })

    it('Test the greetings api receiving a spaced name', async () => {
        const response = await request(app).get('/greetings/bruno vasconcelos')

        expect(response.body).toEqual({message: "Hello bruno vasconcelos!"})
        expect(response.status).toBe(200)
    })
})

