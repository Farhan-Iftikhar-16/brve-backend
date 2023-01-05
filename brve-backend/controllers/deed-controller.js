const express = require('express');
const Deed = require('../models/deed-model');

const router = express.Router();

router.post('/create-deed', (req, res) => {
  Deed.createDeed(req, res);
});

router.put('/update-deed/:id', (req, res) => {
  Deed.updateDeed(req, res);
});

router.get('/get-deed-by-id/:id', (req, res) => {
  Deed.getDeedByID(req, res);
});

router.get('/get-deeds', (req, res) => {
  Deed.getDeeds(req, res);
});

module.exports = router;
