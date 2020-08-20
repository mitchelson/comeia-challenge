import { Request, Response } from 'express';
import db from '../database/connection';

export default class StoresController {
    async show(request: Request, response: Response) {
        const trx = await db.transaction();
        try {

            const respon = await trx('stores').select('*');

            await trx.commit();

            return response.json(respon);

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while show stores'
            })
        }
    }
    async create(request: Request, response: Response) {
        const {
            name,
        } = request.body;

        const trx = await db.transaction();
        try {
            var userExists = await trx('stores').where('name', name);
            if (userExists.length > 0) {
                await trx.rollback();
                return response.status(409).send();
            }
            await trx('stores').insert({
                name
            });
            await trx.commit();

            return response.status(200).send();

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while creating a new stores'
            })
        }
    }
    async index(request: Request, response: Response) {
        const { id } = request.params;
        const trx = await db.transaction();
        try {

            const result = await trx('stores').where('name', 'like', `%${id}%`);

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
        const { name } = request.body;
        const trx = await db.transaction();
        try {

            const respon = await trx('stores')
                .where('id', id)
                .update({
                    name
                });
            await trx.commit();

            return response.json(respon);

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while updating stores'
            })
        }
    }
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const trx = await db.transaction();
        try {

            await trx('stores').where('id', id).del();

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