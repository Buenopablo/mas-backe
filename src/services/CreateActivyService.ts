import {getRepository} from 'typeorm';
import {Activy} from '../models/Activy';

interface ActivyData {
    name: string;
    course_unit_id: string;
    activy_date: string;
}

class CreateActivyService {

    public async execute({name,course_unit_id,activy_date}: ActivyData) {

        const activysRepository = getRepository(Activy);

        const checkActiveExists =  await activysRepository.findOne({name});
        
        if(checkActiveExists) {
            throw new Error('Name Activy adrres alread exist')
        }

        const activy = {
            name,
            course_unit_id,
            activy_date
        }

        await activysRepository.save(activy);

        return activy;
    }
}

export {CreateActivyService}