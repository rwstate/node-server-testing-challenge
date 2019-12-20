
exports.up = function(knex) {
  return knex.schema.createTable('name', tbl => {
    tbl.increments()
    tbl.text('name').unique().notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('name')
};
