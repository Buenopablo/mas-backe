import {getRepository} from 'typeorm'
import {CourseUnit} from '../models/CourseUnit';

interface CourseData {
    name: string;
    description: string;
}

class CreateCourseUnitService {

    public async execute({name,description}: CourseData) {

        const coursesRepository = getRepository(CourseUnit)

        const checkCourseExist = await coursesRepository.findOne({name})

        if(checkCourseExist) {
            return {
                error:'Course name adrres alread exist'
            }
        }

        const course = coursesRepository.create({
            name,
            description
        });

        await coursesRepository.save(course);

        return course;

    }

}

export {CreateCourseUnitService}