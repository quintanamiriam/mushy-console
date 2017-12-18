const players = require('../players');

exports.seed = function(knex, Promise) {
  return knex('player').del()
      .then(function () {
        return knex('player').insert(players);
      })
    };
