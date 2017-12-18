const scores = require('../scores');
const players = require('../players');
const groups = require('../groups');

exports.seed = function(knex, Promise) {

  return Promise.all([

    knex('player').del()
      .then(function () {
        return knex('player').insert(players);
      }),
    knex('group').del()
      .then(function () {
        return knex('group').insert(groups);
      }),
    knex('game_player').del()
      .then(function () {
        return knex('group_player').insert(groups, players);
      }),
    knex('score').del()
      .then(function () {
        return knex('score').insert(scores);
      }),
  ])
};
