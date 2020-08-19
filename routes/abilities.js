const { Router } = require('express');
const router = Router();

const pool = require('../db');

//var gots = ['farm', 'sheep'];
//gots = JSON.stringify(gots);
//console.log(gots);
router.get('/test', function (req, res, next) {
    insert('10', gots, next);
    //query = `INSERT INTO abilities(name, character_id)
    //  VALUES('destructo disk', '2')`;
    //pool.query(query)
    //    .then(() => console.info('inserted'))
    //    .catch((err) => console.info(err));

})

router.get('/', function (req, res, next) {
    query = `SELECT * FROM abilities
        ORDER BY id DESC`;
    pool.query(query)
        .then(result => res.json(result.rows))
        .catch (err => next(err));
})



/* If you do this, it will not work
 * 
 * INSERT INTO abilities(name, character_id)
 * VALUES(${ability}, ${character_id})
 * 
 * because postgres is assuming it to be a column name
*/

function insert(character_id, abilities, next) {
    console.log('\n', character_id, abilities, 'are ready to be inserted');
    for (let ability of abilities) {
        query = `INSERT INTO abilities (name, character_id)
            VALUES($1, $2)`;
        pool.query(query, [ability, character_id])
            .then(console.info(ability, ' was inserted into abilities table'))
            .catch(err => console.error(err));
    }
}

function updateAbilities(character_id, abilities, next) {

    return pool.query(`DELETE FROM abilities
                WHERE character_id=($1)`, [character_id])
        .then(() => {
            insert(character_id, abilities);
            return `Updating all records with character id : ${character_id}`;
        })
        .catch(err => next(err));
}

router.post('/test', function (req, res) {
    const { abilities, id } = req.body;
    updateAbilities(abilities, id);
})

/* module.exports can only export one object 
if we are using exports.variable before or after module.exports
*/

exports.insertAbilities = insert;
exports.updateAbilities = updateAbilities;
exports.abilities = router;