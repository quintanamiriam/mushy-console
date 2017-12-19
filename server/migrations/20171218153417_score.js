exports.up = function(knex, Promise) {
  return knex.schema.createTable('score', (table) => {
      table.increments('id').primary();
      table.integer('score');
      table.integer('player_team_id').references('id').inTable('player_team')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('score')
};
