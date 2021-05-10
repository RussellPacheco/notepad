
exports.up = function(knex) {
    return knex.schema.createTable("notes", table => {
        table.uuid("note_id").primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string("title");
        table.string("body");
        table.uuid("user_id").references("user_id").inTable("users").onDelete("CASCADE")
        table.timestamps(true, true)
    })    
};

exports.down = function(knex) {
    return knex.schema.dropTable("notes")  
};
