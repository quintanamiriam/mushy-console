const groups = require('../groups');

exports.seed = function(knex, Promise) {
  return knex('group').del()
      .then(function () {
        return knex('group').insert(groups);
      })
    };
