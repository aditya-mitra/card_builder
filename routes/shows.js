const { Router } = require('express');
const router = Router();

const pool = require('../db');

/*
 * use let query inside all the functions
 * Otherwise it will be assumed imported from the first package required
 */

router.get('/test', function (req, res) {
    console.log('hit test');
    let query = `INSERT INTO shows (name, character_id)
        VALUES($1, $2)`;
    const name = 'dragon ball z';
    const character_id = '3';
//insert('5', 'dragon ball super');
    pool.query(query, [name, character_id])
        .then(() => console.info('Insertion was complete'))
        .catch(err => console.error('could not be inserted due to ', err));
})

router.get('/', function (req, res, next) {
    const query = `SELECT * FROM shows
            ORDER BY id DESC`;
    pool.query(query)
        .then(result => res.json(result.rows))
        .catch(error => next(error));
});

function insert(character_id, name, next) {
    const query = `INSERT INTO shows (character_id, name)
            VALUES($1, $2)`;
    pool.query(query, [character_id, name])
        .then(() => console.info(name, 'was inserted into shows table'))
        .catch((err) => next(err));
}

function updateShows(character_id, shows, next) {
    const query = `UPDATE shows
                   SET name=($1)
                   WHERE character_id=($2)`;

    return pool.query(query, [shows, character_id])
        .then(() => "Updated show with character id: "+character_id+" successfully")
        .catch(e => next(e));

}

router.post('/test', function (req, res) {
    let { id, shows } = req.body;
    updateShows(id, shows, 'abc');
})

module.exports = {
    shows: router,
    insertShows: insert,
    updateShows
};