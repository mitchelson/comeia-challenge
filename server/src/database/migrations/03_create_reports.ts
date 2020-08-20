import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('reports', table => {
        table.increments('id').primary();

        table.integer('users_id')
            .notNullable()
            .references('id')
            .inTable('users');
        table.integer('ticket_id')
            .notNullable()
            .references('id')
            .inTable('tickets');
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('reports');
}