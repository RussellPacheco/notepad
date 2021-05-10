require("dotenv").config()

module.exports = {
  client: "pg",
  connection: {
    connectionString:
      process.env.DATABASE_URL ||
      `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PW}@127.0.0.1:5432/notepad`
  },
  searchPath: "public",
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: __dirname + "/migrations",
    tableName: 'knex_migrations'
  }
};
