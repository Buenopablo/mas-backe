import { getRepository } from "typeorm";
import { Activy } from "../models/Activy";

interface UserId {
    id: string;
}

class GetActiviesService {

    public async execute({id}:UserId) {

        const activysRepository = getRepository(Activy);

        const activies = activysRepository.find();

        if(!activies) {
            return {
                message: 'activies not found'
            }
        }

        return activies;

    }

}

export {GetActiviesService};