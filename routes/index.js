const { Router } = require('express');
const character = require('./character');
const abilities = require('./abilities').router;

const router = Router();

router.use('/characters', character);
router.use('/abilities', abilities);

module.exports = router;