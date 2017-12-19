const knex =require('./knex');

module.exports = {
  getAll() {
	  return knex('team');
  },
  getOne(id) {
    return knex('team').where('id', id).first();
  },
  create(teams) {
    return knex('team').insert(teams, '*');
  },
  // update(id, teams) {
  //   return knex('team').where('id', id).update(teams, '*');
  // },
  // delete(id) {
  //   return knex('team').where('id', id).del();
  // },
}
