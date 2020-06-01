exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 128).unique().notNullable();
    })
    .createTable("Ingredients", (tbl) => {
      tbl.increments("id");
      tbl.string("name").notNullable();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .references("id")
        .inTable("Ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity").notNullable();
    })
    .createTable("recipe_steps", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("recipe_step_id")
        .notNullable()
        .references("id")
        .inTable("recipe");
      tbl.integer("recipe_step").notNullable();
      tbl.string("instruction").notNullable();
    });
};

exports.down = function (knex) {};
