
exports.seed = function(knex, Promise) {
  return knex('dishes').truncate()
    .then(function () {
      return knex('dishes').insert([
        {name: 'Chicken'},
        {name: 'Seafood'},
        {name: 'Beef'},
        {name: 'Pasta'},
        {name: 'Dessert'}
      ]);
    });
};
