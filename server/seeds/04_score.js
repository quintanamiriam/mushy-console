const scores = require('../scores');

exports.seed = function(knex, Promise) {
  return knex('score').del()
    .then(function () {
      return knex('score').insert(scores);
    })
  };
