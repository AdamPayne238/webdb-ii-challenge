//Every time you add or update information
// npx knex seed:run
//Because return knex('cars').truncate()
//Will update list never duplicating. WOOT!

exports.seed = function(knex, Promise) {
    return knex('cars').truncate()
      .then(function () {
        return knex('cars').insert([
        { VIN: '010101010101', make: 'cool', model: 'car', mileage: 'toomuchsauce'},
        { VIN: '111111111111', make: 'new', model: 'wow', mileage: 'so much miles'},
        { VIN: '909090909090', make: 'niner', model: 'ninerniner', mileage: 'over9000'},
        { VIN: '000000000000', make: 'brand', model: 'new', mileage: 'zero'},
        { VIN: '200200200200', make: '2hunna', model: '2muchcar', mileage: '2muchmiles'},
        ]);
      });
  };