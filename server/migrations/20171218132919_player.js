exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', (table) => {
    table.increments('id').primary();
    table.text('name');
    })
};

exports.down = function(knex, Promise) {
        knex.schema.dropTableIfExists('player')
};
