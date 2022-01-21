const express = require('express');
const rescue = require('express-rescue');
const auth = require('../../middleware/auth');
const create = require('./create');
const get = require('./get');
const getId = require('./getId');

const router = express.Router({ mergeParams: true });

router.post('/', auth, rescue(create));
router.get('/:id', rescue(getId));
router.get('/', rescue(get));

module.exports = router;