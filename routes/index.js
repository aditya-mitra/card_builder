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


// get all cards
router.get('/', function (req, res, next) {
    console.log('hit main router');
    const query = `SELECT c.id AS id, c.name AS name, s.name AS shows, a.name AS abilities
                    FROM characters c
                    JOIN abilities a ON c.id = a.character_id
                    JOIN shows s ON c.id = s.character_id
                    GROUP BY c.id, s.name, a.name
                    ORDER BY c.id DESC`;
    pool.query(query)
        .then((result) => res.json(result.rows))
        .catch(e => next(e));
})

router.get('/:id', function (req, res, next) {
    const { id } = req.params;
    const query = `SELECT c.id AS id, c.name AS name, s.name AS shows, a.name AS abilities
                    FROM (SELECT * FROM characters
	                    WHERE characters.id = ($1)) c
                    JOIN abilities a ON c.id = a.character_id
                    JOIN shows s ON c.id = s.character_id`;
    pool.query(query, [id])
        .then(result => res.json(result.rows))
        .catch(e => console.error(e));
})


module.exports = router;