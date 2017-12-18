const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAll().then(scores => {
	    res.json(scores);
	  });
});


module .exports = router;
