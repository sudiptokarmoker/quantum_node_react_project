const pg = require('pg')
require('dotenv').config()

const pool = new pg.Pool({
	host: 	  process.env.DB_HOST || 'localhost',
	database: process.env.DB_NAME || 'visionboarder',
	port: 	  process.env.DB_PORT || 5432,
	user: 	  process.env.DB_USER,
	password: process.env.DB_USER_PASSWORD
});

pool.on('connect', client => {
	//console.log('Successfully connected to Postgre SQL Database.');
});

pool.on('error', function (err) {
	console.log('idle client error', err.message, err.stack)
})

module.exports = {
	pool,
	query: (text, params, callback) => {
		return pool.query(text, params, callback)
	}
}