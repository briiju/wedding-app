const { Client } = require('pg');

const client = new Client({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
});

class Utility {
    constructor () {
        client.connect();
        this.client = client;
    }

    async insertRsvp (params) {
        const query = `
        INSERT INTO haa_data.rsvp (full_name, email, guests, events)
        VALUES ($1, $2, $3, $4)
        `;
        const values = [ params.fullName, params.email, params.guests, params.events ];

        try {
            await client.query(query, values);
            return;
        } catch (err) {
            return err;
        }
    }

    async insertContact (params) {
        const query = `
        INSERT INTO haa_data.contact (full_name, email, phone_number, message)
        VALUES ($1, $2, $3, $4)
        `;
        const values = [ params.fullName, params.email, params.phoneNumber, params.message ];

        try {
            await client.query(query, values);
            return;
        } catch (err) {
            return err;
        }
    }
}

module.exports = new Utility();
