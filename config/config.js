require('dotenv').config();

const config = {
    db: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: +process.env.DB_PORT,
    },
    mail: {
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
    }
};

module.exports = config;
