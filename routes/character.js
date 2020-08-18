const { Router} = require('express');
const router = Router();

const pool = require('../db');

const { insertAbilities } = require('./abilities');

async function checkPresence(name) {
    const query = `SELECT name FROM CHARACTERS WHERE name ILIKE '%${name}%'`;
    const result = await pool.query(query);
    if (result.rows.length > 0) return true;
    else return false;
}

router.get('/presencetest', async (req, res) => {
    if (await checkPresence('bulma')) {
        console.log('goku is present');
    } else console.log('not present');

});

function sanitize(req) {
    let { name, abilities } = req.body;
    name = name.trim().toLowerCase();
    abilities = abilities.trim().toLowerCase();
    abilities = abilities.split(',');
    req.body.name = name;
    req.body.abilities = abilities;
}




router.get('/', function (req, res, next) {
    const query = `SELECT * FROM CHARACTERS ORDER BY createdAt DESC`;
    pool.query(query)
        .then(result => result.rows)
        .then(rows => res.json(rows))
        .catch(error => next(error));
});

router.post('/', async function (req, res, next) {
    //insertAbilities('4', ['small arms' ], next);
    //return;
    sanitize(req);
    let { name, abilities } = req.body;
    let query = `SELECT CURRENT_TIMESTAMP(3)`; // precison is 3
    let current_timestamp = await pool.query(query);
    current_timestamp = current_timestamp.rows[0].current_timestamp;

    //return res.send(current_timestamp);

    console.info('Inserting a value into the characters table');
    query = `INSERT INTO characters (name, createdAt)
        VALUES($1, $2)
        RETURNING *`;

    pool.query(query, [name, current_timestamp])
        .then(result => result.rows[0].id)
        .then(character_id => {
            console.log(character_id);
            insertAbilities(character_id, abilities, next);
        })
        .then(() => res.redirect('/characters'))
        .catch(error => next(error));

});

module.exports = router;