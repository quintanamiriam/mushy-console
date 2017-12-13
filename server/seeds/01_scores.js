
exports.seed = function(knex, Promise) {

  return Promise.all([

    knex('player').del()
      .then(function () {
        return knex('player').insert();
      }),
    knex('group').del()
      .then(function () {
        return knex('group').insert();
      }),
    knex('game_player').del()
      .then(function () {
        return knex('game_player').insert();
      }),
    knex('score').del()
      .then(function () {
        return knex('score').insert();
      }),
  ])
};
