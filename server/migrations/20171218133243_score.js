exports.up = function(knex, Promise) {
  return knex.schema.createTable('score', (table) => {
      table.increments('id').primary();
      table.integer('score');
      table.integer('group_player_id').references('id').inTable('group_player')
    })
};

exports.down = function(knex, Promise) {
        knex.schema.dropTableIfExists('score')
};
