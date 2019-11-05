// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { // old './dev.sqlite3' // `/data/migrations/car-dealer.db3`
      filename: './data/car-dealer.db3'
    },
  useNullAsDefault: true, // required only for sqlite
  migrations: {
    directory: './data/migrations', // /Users/captaincrook/webdb-ii-challenge/data/migrations/20191105155901_cars.js
  },
  seeds: {
    directory: './data/seeds',
  },
},

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
