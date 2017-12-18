exports.up = function(knex, Promise) {
  return knex.schema.createTable('group_player', (table) => {
    table.increments('id').primary();
    table.integer('group_id').references('id').inTable('group') ;
    table.integer('player_id').references('id').inTable('player');
    })
};

exports.down = function(knex, Promise) {
        knex.schema.dropTableIfExists('group_player')
};
