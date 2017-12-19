exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_team', (table) => {
    table.increments('id').primary();
    table.integer('player_id').references('id').inTable('player').onDelete('CASCADE');
    table.integer('team_id').references('id').inTable('team').onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('player_team')
};
