import {Request, Response} from 'express';
import {CreateCourseUnitService} from '../services/CreateCourseUnitService';
import { GetCourseUnitsService } from '../services/GetCourseUnitsService';

class CourseController {

    async createCourse(request: Request, response: Response) {

        const courseData = request.body;

        const createCourse = new CreateCourseUnitService();

        const course = await createCourse.execute(courseData);

        return response.json(course);
    }

    async show(request: Request, response: Response) {
        const userId = request.body.user;

        const getCourseUnits = new GetCourseUnitsService();

        const courseUnits = await getCourseUnits.execute(userId);

        return response.json(courseUnits)

    }

}

export {CourseController}