exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('player', (table) => {
      table.increments('id').primary();
      table.text('name');
    }),

    knex.schema.createTable('group', (table) => {
      table.increments('id').primary();
      table.text('title');
    }),

    knex.schema.createTable('group_player', (table) => {
      table.increments('id').primary();
      table.integer('group_id').references('id').inTable('group') ;
      table.integer('player_id').references('id').inTable('player');
    }),

    knex.schema.createTable('score', (table) => {
      table.increments('id').primary();
      table.integer('score');
      table.integer('group_player_id').references('id').inTable('group_player')
    }),
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTableIfExists('score'),
        knex.schema.dropTableIfExists('group_player'),
        knex.schema.dropTableIfExists('player'),
        knex.schema.dropTableIfExists('group'),
  ])
};
