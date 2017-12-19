const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validTeam(teams) {
  return true
  const hasTitle = typeof teams.title == 'string' && teams.title.trim() != '';
  return hasTitle;
}

router.get('/', (req, res) => {
  queries.getAll().then(teams => {
	   res.json(teams);
	});
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(teams => {
    if (teams) {
      res.json(teams);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if(validTeam(req.body)) {
    console.log('Body in POST:', req.body);
    queries.create(req.body).then(teams => {

      res.json(teams[0]);
    });
  }else {
    next(new Error('Invalid Team'));
  }
});

// router.put('/:id', isValidId, (req, res, next) => {
//   if (validTeam(req.body)) {
//     queries.update(req.params.id, req.body).then(teams => {
//       res.json(teams[0]);
//     });
//   } else {
//     next(new Error('Invalid Team'));
//   }
// });
//
// router.delete('/:id', isValidId, (req, res) => {
//   queries.delete(req.params.id).then(() => {
//     res.json({
//       deleted: true
//     });
//   });
// });

module.exports = router;
