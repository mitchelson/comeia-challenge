import express from 'express';
import ReportsController from './controllers/ReportsController';
import StoresController from './controllers/StoresController';
import TicketsController from './controllers/TicketsController';
import UsersController from './controllers/UsersController';

const routes = express.Router();

const reportsController = new ReportsController;
const storesController = new StoresController;
const ticketsController = new TicketsController;
const usersController = new UsersController;

routes.post('/users', usersController.create);
routes.get('/users/:id', usersController.index);
routes.put('/users/:id', usersController.update);
routes.get('/users', usersController.show);
routes.delete('/users/:id', usersController.delete);

routes.post('/stores', storesController.create);
routes.get('/stores/:id', storesController.index);
routes.put('/stores/:id', storesController.update);
routes.get('/stores', storesController.show);
routes.delete('/stores/:id', storesController.delete);

routes.post('/tickets', ticketsController.create);
routes.put('/tickets/:id', ticketsController.update);
routes.get('/tickets', ticketsController.show);
routes.delete('/tickets/:id', ticketsController.delete);

routes.post('/reports', reportsController.create);
routes.get('/reports/:id', reportsController.index);
routes.put('/reports/:id', reportsController.update);
routes.get('/reports', reportsController.show);
routes.delete('/reports/:id', reportsController.delete);

export default routes;