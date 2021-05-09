import {Request, Response} from 'express';
import {CreateUserService} from '../services/CreateUserService';
import {UserUpdateService} from '../services/userUpdateService';

class UserController {

    async create(request: Request, response: Response) {
        
        const userData = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute(userData);

        return response.json(user);

    }

    async update(request: Request, response: Response) {
        
        const userData = request.body;

        const userUpdate = new UserUpdateService();

       const user = userUpdate.execute(userData);
       return response.json(user);
    }
}

export {UserController}