const express = require('express');
const router = express.Router();
const queries = require('../db/queries');


router.get('/', (req, res) => {
  queries.getAll().then(teams => {
	   res.json(teams);
	});
});

// router.get('/:id', (req, res, next) => {  queries.getOne(req.params.id).then(team => {
//     if (team) {
//       res.json(team);
//     } else {
//       next();
//     }
//   });
// });


module.exports = router;
