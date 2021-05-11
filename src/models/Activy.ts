import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
import { CourseUnit } from './CourseUnit';

@Entity("activies")
class Activy {

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;
    
    @Column()
    activy_date: string;
    
    @Column()
    course_unit_id: string;
    
    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit;    
}

export {Activy}