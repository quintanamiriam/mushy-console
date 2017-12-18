exports.up = function(knex, Promise) {
  return knex.schema.createTable('group', (table) => {
      table.increments('id').primary();
      table.text('title');
    })
};

exports.down = function(knex, Promise) {
        knex.schema.dropTableIfExists('group')
};
