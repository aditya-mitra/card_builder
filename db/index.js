const { Pool } = require('pg');
const credentials = require('../bin/secrets/credentials');

const pool = new Pool(credentials);

/*var demoQuery =
    `INSERT INTO characters (name)
    VALUES 
    ('goku'),
    ('vegeta')`;

demoQuery = `SELECT DISTINCT name FROM characters`;

pool.query(demoQuery, (err, res)=>{
    if (err) return console.log('An error was triggered ', error);
    console.log('query completed', res);
});*/


module.exports = pool;