
exports.up = async function(knex) {
    await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable("users", table => {
        table.uuid("user_id").primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string("first_name");
        table.string("last_name");
        table.string("username");
        table.string("password");
        table.string("email");
        table.timestamps(true, true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("users")
  
};
