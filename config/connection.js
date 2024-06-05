// importing squelize and dotenv
const Sequelize = require("sequelize");
require('dotenv').config();
// squelize is an empty variable 
let sequelize;

if (process.env.DB_URL) {
    // seuqlize is now processing the url from the data base to establish connection
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    });
} else {
    // using imported user enviorment varibles from .env to connect with database
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        // the host of the url and it will use postgres 
        {
            host: "localhost",
            dialect: "postgres",
        }
    );
}
// export sequelize for use in the server.js
module.exports = sequelize;
