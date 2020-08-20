import { Request, Response } from 'express';
import db from '../database/connection';

export default class TicketsController {
    async show(request: Request, response: Response) {
        const trx = await db.transaction();
        try {

            const respon = await trx('tickets')
                .innerJoin('stores', 'stores.id', 'tickets.stores_id')
                .select('*');

            await trx.commit();

            return response.json(respon);

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while show tickets'
            })
        }
    }
    async create(request: Request, response: Response) {
        const {
            title,
            amount,
            stores_id
        } = request.body;

        const trx = await db.transaction();
        try {
            await trx('tickets').insert({
                title,
                amount,
                stores_id
            });
            await trx.commit();

            return response.status(200).send();

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while creating a new tickets'
            })
        }
    }
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { title, amount } = request.body;
        const trx = await db.transaction();
        try {

            const respon = await trx('tickets')
                .where('id', id)
                .update({
                    title,
                    amount,
                });
            await trx.commit();

            return response.json(respon);

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while updating tickets'
            })
        }
    }
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const trx = await db.transaction();
        try {

            await trx('tickets').where('id', id).del();

            await trx.commit();

            return response.status(200).json();

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while deleting user'
            })
        }
    }
}