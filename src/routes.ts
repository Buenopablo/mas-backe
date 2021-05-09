import {Router} from 'express';
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';
import {CourseController} from './controller/CourseUnitController';
import {AuthenticateController} from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

const userController = new UserController();
const activyController = new ActivyController();
const courseController = new CourseController();
const authenticateController = new AuthenticateController();
const routes = Router();

routes.post('/user', userController.create);
routes.post('/auth', authenticateController.create);
routes.post('/activy', authenticated , activyController.createActivy);
routes.post('/courseunit', authenticated , courseController.createCourse);

routes.put('/userid', userController.update);


export default routes;