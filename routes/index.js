const { Router } = require('express');
const router = Router();

const { character, updateCharacter } = require('./character');
const { abilities, updateAbilities } = require('./abilities');
const { shows, updateShows } = require('./shows');

const pool = require('../db');

/*
 * characters -> shows is ONE-ONE relation
 * characters -> abilities is ONE-MANY relation
 */


// these routes come before the '/'
router.use('/characters', character);
router.use('/abilities', abilities);
router.use('/shows', shows);


function modifyRows(rows) {

    let modified = new Array();
    let lastId, curr = -1;

    for (let row of rows) {
        if (!lastId || lastId != row.id) {
            let obj = { ...row }; // copy the key-values from row to obj. Otherwise, it will be a reference
            delete obj.ability;
            obj.abilities = new Array();
            modified.push(obj);
            lastId = row.id;
            curr++;

        }
        console.log(typeof row.ability, ' is the type of row and its value is ', row.ability, ' and we have ', row);
        modified[curr].abilities.push(row.ability);

    }
    console.log('After modification');
    console.log(modified);
    return modified;
}

// get all cards
router.get('/', function (req, res, next) {
    const query = `SELECT c.id AS id, c.name AS name, s.name AS shows, a.name AS ability
                    FROM characters c
                    JOIN abilities a ON c.id = a.character_id
                    JOIN shows s ON c.id = s.character_id
                    GROUP BY c.id, s.name, a.name
                    ORDER BY c.id DESC`;
    pool.query(query)
        .then(result => result.rows)
        .then(rows => modifyRows(rows))
        .then(mrows=>res.json(mrows))
        .catch(e => next(e));
})

router.get('/:id', function (req, res, next) {
    const { id } = req.params;
    const query = `SELECT c.id AS id, c.name AS name, s.name AS shows, a.name AS ability
                    FROM (SELECT * FROM characters
	                    WHERE characters.id = ($1)) c
                    JOIN abilities a ON c.id = a.character_id
                    JOIN shows s ON c.id = s.character_id`;
    pool.query(query, [id])
        .then(result => result.rows)
        .then(rows => modifyRows(rows))
        .then(mrows => res.json(mrows))
        .catch(e => next(e));
})


module.exports = router;