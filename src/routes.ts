import {Router} from 'express';
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';


interface UserRequest {
    name: string;
    email: string;
    password: string;
}

const userController = new UserController();
const activyController = new ActivyController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/activy', activyController.createActivy);
routes.post('/courseUnit', () => console.log('Course unit router'));


export default routes;