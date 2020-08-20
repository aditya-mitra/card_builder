const { Router} = require('express');
const router = Router();

const pool = require('../db');

const { insertAbilities } = require('./abilities');
const { insertShows } = require('./shows');

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

// helper function
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




router.get('/', function (req, res, next) {
    const query = `SELECT * FROM CHARACTERS ORDER BY createdAt DESC`;
    pool.query(query)
        .then(result => result.rows)
        .then(rows => res.json(rows))
        .catch(error => next(error));
});

router.post('/', async function (req, res, next) {
    sanitize(req);
    let { name, abilities, shows, img } = req.body;
    let query = `SELECT CURRENT_TIMESTAMP(3)`; // precison is 3
    let current_timestamp = await pool.query(query);
    current_timestamp = current_timestamp.rows[0].current_timestamp;

    console.info('Inserting a value into the characters table');
    query = `INSERT INTO characters (name, createdAt, img)
        VALUES($1, $2, $3)
        RETURNING *`;

    pool.query(query, [name, current_timestamp, img])
        .then(result => result.rows[0].id)
        .then(async character_id => {
            const cid = await Promise.all([
                insertShows(character_id, shows, next),
                insertAbilities(character_id, abilities, next)
            ])
                .then(values => console.log(values))
                .then(() => character_id)
                .catch((e) => next(e));
            return cid;
        })
        .then(character_id => res.json({ character_id }))
        .catch(error => next(error));

});


function updateCharacter(character_id, name, img, next) {

    const query = `UPDATE characters
            SET name=($1),
                img=($2)
            WHERE id=($3)`;

    return pool.query(query, [name, img, character_id])
        .then(() => console.info('Updated character id :' + character_id + ' successfully'))
        .catch(err => next(err));
}



// rows in other tables will automatically be deleted becase we have used CASCADE
function deleteCharacter(character_id, res) {
    const query = `DELETE FROM characters
                  WHERE id=($1)`;
    pool.query(query, [character_id])
        .then(() => console.info('Character with id: ' + character_id + ' deleted succesfully'))
        .catch(e => console.error(e));
    res.send('done');
}

router.delete('/:id', function (req, res, next) {
    const { id } = req.params;
    deleteCharacter(id, res);
})

exports.character = router;
exports.updateCharacter = updateCharacter;