const groups = require('../groups');
const players = require('../players');

exports.seed = function(knex, Promise) {
  return knex('group_player').del()
      .then(function () {
        return knex('group_player').insert(groups).insert(players);
      })
    };
