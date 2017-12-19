const players = require('../players');

exports.seed = function(knex, Promise) {

  return knex.raw('delete from player; alter sequence player_id_seq restart with 1')
    .then(function () {
      return knex('player').insert(players);
    })
};
