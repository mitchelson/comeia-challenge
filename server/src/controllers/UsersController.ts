import { Request, Response } from 'express';
import db from '../database/connection';

export default class UsersControllers {
    async show(request: Request, response: Response) {
        const trx = await db.transaction();
        try {

            const respon = await trx.select().table('users');

            await trx.commit();

            return response.json(respon);

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while show users'
            })
        }
    }
    async create(request: Request, response: Response) {
        const {
            name,
            cpf,
            password
        } = request.body;

        const trx = await db.transaction();
        try {
            var userExists = await trx('users').where('cpf', cpf);
            if (userExists.length > 0) {
                await trx.rollback();
                return response.status(409).send();
            }
            await trx('users').insert({
                name,
                cpf,
                password
            });
            await trx.commit();

            return response.status(200).send();

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'unexpected error while creating a new users'
            })
        }
    }
    async index(request: Request, response: Response) {
        const { id } = request.params;
        const trx = await db.transaction();
        try {

            const result = await trx('users').where('cpf', id);

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

            const respon = await trx('users')
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
                error: 'unexpected error while updating users'
            })
        }
    }
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const trx = await db.transaction();
        try {

            await trx('users').where('cpf', id).del();

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