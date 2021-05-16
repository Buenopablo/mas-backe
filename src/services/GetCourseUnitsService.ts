import { getRepository } from "typeorm"
import { CourseUnit } from "../models/CourseUnit"

interface UserId {
    id: string;
}

class GetCourseUnitsService {

    public async execute({id}:UserId) {

        const courseUnitRepository = getRepository(CourseUnit)

        const coursesUnits = await courseUnitRepository.find();

        if(!coursesUnits) {
            return {
                message: "Course units not found"
            }
        }

        return coursesUnits;

    }

}

export { GetCourseUnitsService}