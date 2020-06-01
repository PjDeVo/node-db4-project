exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_steps").insert([
        { recipe_step_id: 1, recipe_step: 1, instruction: "wash yo hands" },
      ]);
    });
};
