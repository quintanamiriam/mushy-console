const teams = require('../teams');

exports.seed = function(knex, Promise) {

  return knex.raw('delete from team; alter sequence team_id_seq restart with 1')
    .then(function () {
      return knex('team').insert(teams);
    });
};
