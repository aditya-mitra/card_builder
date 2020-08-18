const { Router } = require('express');
const character = require('./character');
const abilities = require('./abilities').router;
const shows = require('./shows').router;

const router = Router();

/*
 * characters -> shows is ONE-ONE relation
 * characters -> abilities is ONE-MANY relation
 */

router.use('/characters', character);
router.use('/abilities', abilities);
router.use('/shows', shows);

module.exports = router;