const express = require('express');
const HashTags = require('../models/hash-tags-model');

const router = express.Router();

router.get('/get-hash-tags', (req, res) => {
  HashTags.getHashTags(req, res);
});

module.exports = router;
