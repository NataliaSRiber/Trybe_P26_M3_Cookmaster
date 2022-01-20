const express = require('express');
const rescue = require('express-rescue');
const auth = require('../../middleware/auth');
const create = require('./create');
const get = require('./get');

const router = express.Router({ mergeParams: true });

router.post('/', auth, rescue(create));
router.get('/', rescue(get));

module.exports = router;