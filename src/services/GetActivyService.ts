import { getRepository } from "typeorm"
import { Activy } from "../models/Activy"

interface UserId {
    id?:string;
}

class GetActivyService {

    public async execute({id}:UserId){

        const activyRepository = getRepository(Activy);

        const activies = await activyRepository.find({relations: ["course_unit"]});

        if(!activies){
            return {
                message:"activies not found"
            }
        }

        return activies;

    }

}

export {GetActivyService}