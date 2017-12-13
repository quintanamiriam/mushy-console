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

    knex.schema.createTable('game_player', (table) => {
      table.increments('id').primary();
      table.integer('group_id').references('id').inTable('group') ;
      table.integer('player_id').references('id').inTable('player');
    }),

    knex.schema.createTable('score', (table) => {
      table.increments('id').primary();
      table.integer('score');
      table.integer('game_player_id').references('id').inTable('game_player')
    }),
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('player'),
        knex.schema.dropTable('group'),
        knex.schema.dropTable('game_player'),
        knex.schema.dropTable('score'),
  ])
};
