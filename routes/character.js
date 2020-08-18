const { Router} = require('express');
const pool = require('../db');

const router = Router();

// /characters GET route
router.get('/', function (req, res) {
    const query = `SELECT * FROM CHARACTERS ORDER BY createdAt DESC`;
    pool.query(query)
        .then(result => result.rows)
        .then(rows => res.json(rows))
        .catch(error => console.error('Error executing query ', error.stack))
});

async function checkPresence(name) {
    const query = `SELECT name FROM CHARACTERS WHERE name ILIKE '%${name}%'`;
    const result = await pool.query(query);
    if (result.rows.length > 0)
        return true;
    else return false;
}

router.get('/test', async (req, res) => {
    if (await checkPresence('bulma')) {
        console.log('goku is present');
    } else console.log('not present');

});

router.post('/', function (req, res) {
    const { name } = req.body;
    let query = `SELECT CURRENT_TIMESTAMP(2)`; // precison is 2
    let current_timestamp;

    pool.query(query)
        .then(result => {
            current_timestamp = result.rows[0].current_timestamp;
        })
        .then(() => {
            console.info('Inserting a value into the characters table');
            query = `INSERT INTO CHARACTERS (name, createdAt)
             VALUES($1, $2)`;
            pool.query(query, [name, current_timestamp])
                .then(() => res.redirect('/characters'))
                .catch(error => console.error(error));
        })
        .catch(error => console.log('error getting timestamp'));

});

module.exports = router;