const express = require('express');
const rescue = require('express-rescue');
const auth = require('../../middleware/auth');
const create = require('./create');
const get = require('./get');
const getId = require('./getId');
const putId = require('./update');
const remove = require('./remove');
const upload = require('./upload');
const uploadMiddleware = require('../../middleware/upload');

const router = express.Router({ mergeParams: true });

router.post('/', auth, rescue(create));
router.get('/:id', rescue(getId));
router.get('/', rescue(get));
router.put('/:id', auth, rescue(putId));
router.delete('/:id', auth, rescue(remove));
router.put('/:id/image/', auth, uploadMiddleware, rescue(upload));

module.exports = router;