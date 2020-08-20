import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('tickets', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.decimal('amount').notNullable();
        table.integer('stores_id')
            .notNullable()
            .references('id')
            .inTable('stores')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('tickets');
}