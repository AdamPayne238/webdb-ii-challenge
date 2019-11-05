// ## Specifications

// The client for this API is a car dealer who has provided the following specs:

// - The critical information for each car is the VIN, make, model, and mileage.
// - They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

exports.up = function(knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments();

    table.string('VIN', 128);
    table.string('make', 128).notNullable();
    table.string('model', 128).notNullable();
    table.float('mileage', 64);

    // this information is not always immediately known.
    // table.string('transmission', 128);
    // table.string('title', 128);

    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
