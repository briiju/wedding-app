const { Client } = require('pg');
const nodemailer = require('nodemailer');
const config = require('../config/config')

const client = new Client({
    user: config.db.user,
    host: config.db.host,
    database: config.db.database,
    password: config.db.password,
    port: config.db.port,
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
        const values = [ params.fullName, params.phone, params.guests, params.message ];

        try {
            await client.query(query, values);
            //don't await this, let it fail silently if it does
            let body = `${params.fullName} RSVP'd with the following info: \n${JSON.stringify(params, null, 2)}`
            this.sendEmail({ subject: 'New RSVP From herbandalyssa.com!!!', body })
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
            //don't await this, let it fail silently if it does
            let body = `${params.fullName} sent a new question: \n${JSON.stringify(params, null, 2)}`
            this.sendEmail({ subject: 'New Contact Us Question From herbandalyssa.com!!!', body })
            return;
        } catch (err) {
            return err;
        }
    }

    async sendEmail ({body, subject}) {
        let mailTransporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            secure: true,
            port: 465,
            auth: {
                user: config.mail.auth.user,
                pass: config.mail.auth.pass
            }
        });
        
        let mailDetails = {
            from: config.mail.from,
            to: config.mail.to,
            subject: subject,
            text: body
        };
        
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs', err);
            } else {
                console.log('Email sent successfully');
            }
        });
    }
}

module.exports = new Utility();
