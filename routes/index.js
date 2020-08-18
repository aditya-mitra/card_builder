const { Router } = require('express');
const character = require('./character');

const router = Router();

router.use('/characters', character);

module.exports = router;