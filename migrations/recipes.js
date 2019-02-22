exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments();
    tbl
      .string("name", 255)
      .notNullable()
      .unique();
    tbl
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.text("instructions");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
