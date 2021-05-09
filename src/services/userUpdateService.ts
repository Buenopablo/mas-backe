import {getRepository} from 'typeorm';
import { User } from '../models/User';



interface UserData {
    id: string;
    name: string;
    email: string;
    password: string;
}

class UserUpdateService {

    public async execute({id,email}: UserData) {

        const usersRepository = getRepository(User)

        const user = await usersRepository.findOne(id)

        if(!user) {
            return {
                error: "user not found"
            }
        }

        return usersRepository.save(user)
    }
    

}

export {UserUpdateService}

