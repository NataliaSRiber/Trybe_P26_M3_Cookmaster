const express = require('express');
const rescue = require('express-rescue');
const auth = require('../../middleware/auth');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', auth, rescue(create));

module.exports = router;