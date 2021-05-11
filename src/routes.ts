import {Router} from 'express';
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';
import {CourseController} from './controller/CourseUnitController';


interface UserRequest {
    name: string;
    email: string;
    password: string;
}

const userController = new UserController();
const activyController = new ActivyController();
const courseController = new CourseController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/activy', activyController.createActivy);
routes.post('/courseUnit', courseController.createCourse);


export default routes;