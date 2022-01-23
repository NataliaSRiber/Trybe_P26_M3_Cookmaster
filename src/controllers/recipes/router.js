const express = require('express');
const rescue = require('express-rescue');
const auth = require('../../middleware/auth');
const create = require('./create');
const get = require('./get');
const getId = require('./getId');
const putId = require('./update');

const router = express.Router({ mergeParams: true });

router.post('/', auth, rescue(create));
router.get('/:id', rescue(getId));
router.get('/', rescue(get));
router.put('/:id', auth, rescue(putId));

module.exports = router;