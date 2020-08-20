import { Request, Response } from 'express';
import db from '../database/connection';

export default class ReportsController {
    async show(request: Request, response: Response) {
        const trx = await db.transaction();
        try {

            const respon = await trx.select().table('reports');

            await trx.commit();

            return response.json(respon);

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while show reports'
            })
        }
    }
    async create(request: Request, response: Response) {
        const {
            user_id,
            ticket_id
        } = request.body;
        const trx = await db.transaction();
        try {
            var userExists = await trx('reports').where({
                user_id,
                ticket_id
            });
            console.log(userExists)
            if (userExists.length > 0) {
                await trx.rollback();
                return response.status(409).send();
            }
            await trx('reports').insert({
                user_id,
                ticket_id
            });
            console.log("vai")
            await trx.commit();

            return response.status(200).send();

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while creating a new reports'
            })
        }
    }
    async index(request: Request, response: Response) {
        const { id } = request.params;
        const trx = await db.transaction();
        try {

            const result = await trx('reports').where('users_id', id);

            await trx.commit();

            return response.json(result);

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while deleting user'
            })
        }
    }
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, cpf, password } = request.body;
        const trx = await db.transaction();
        try {

            const respon = await trx('reports')
                .where('id', id)
                .update({
                    name,
                    cpf,
                    password
                });
            await trx.commit();

            return response.json(respon);

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while updating reports'
            })
        }
    }
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const trx = await db.transaction();
        try {

            await trx('reports').where('cpf', id).del();

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