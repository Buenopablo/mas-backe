import {Request, Response} from 'express';
import {CreateCourseUnitService} from '../services/CreateCourseUnitService';

class CourseController {

    async createCourse(request: Request, response: Response) {

        const courseData = request.body;

        const createCourse = new CreateCourseUnitService();

        const course = await createCourse.execute(courseData);

        return response.json(course);
    }

}

export {CourseController}