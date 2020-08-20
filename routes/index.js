const { Router } = require('express');
const router = Router();

const { character, updateCharacter } = require('./character');
const { abilities, updateAbilities } = require('./abilities');
const { shows, updateShows } = require('./shows');

const pool = require('../db');

// helper functions
function sanitize(req) {
    let { name, abilities, shows, img } = req.body;

    name = name.trim().toLowerCase();

    abilities = abilities.trim().toLowerCase();
    abilities = abilities.split(',');
    for (let i in abilities) {
        abilities[i] = abilities[i].trim();
    }

    shows = shows.trim().toLowerCase();

    img = img.trim();

    req.body.name = name;
    req.body.abilities = abilities;
    req.body.shows = shows;
    req.body.img = img;
}

function modifyRows(rows) {

    let modified = new Array();
    let lastId, curr = -1;

    console.log('The value of rows at modifyRows', rows);

    for (let row of rows) {
        if (!lastId || lastId != row.id) {
            let obj = { ...row }; // copy the key-values from row to obj. Otherwise, it will be a reference
            delete obj.ability;
            obj.abilities = new Array();
            modified.push(obj);
            lastId = row.id;
            curr++;

        }
        //console.log(typeof row.ability, ' is the type of row and its value is ', row.ability, ' and we have ', row);
        modified[curr].abilities.push(row.ability);

    }
    console.log('After modification');
    console.log(modified);
    return modified;
}


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
    const query = `SELECT c.id AS id, c.name AS name, c.img AS img, s.name AS shows, a.name AS ability
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
    const query = `SELECT c.id AS id, c.name AS name, s.name AS shows, a.name AS ability, c.img AS img
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


router.put('/:id', (req, res, next) => {
    sanitize(req);
    const { id } = req.params;
    Promise.all([
        updateAbilities(id, req.body.abilities, next), // since abilities are 'many', there might (not happend till now) be a problem that we would be getting the old abilities with new shows and character
        updateCharacter(id, req.body.name, req.body.img, next),
        updateShows(id, req.body.shows, next)
    ])
        .then(values => console.log(values))
        .then(() => res.redirect('/' + id))
        .catch(err => console.error(err));
})

module.exports = router;