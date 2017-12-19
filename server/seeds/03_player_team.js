const players_teams = require('../players_teams');

exports.seed = function(knex, Promise) {

  return knex.raw('delete from player_team; alter sequence player_team_id_seq restart with 1')
    .then(function () {
      return knex('player_team').insert(players_teams);
    })
};
