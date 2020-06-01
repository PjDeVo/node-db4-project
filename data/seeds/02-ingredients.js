exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Ingredients").insert([
        { name: "Ingredient 1" },
        { name: "Ingredient 2" },
        { name: "Ingredient 3" },
      ]);
    });
};
