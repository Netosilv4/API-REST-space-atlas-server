import { IClass } from '../schema/classSchema';
import { IGrades } from '../schema/gradesSchema';
import { ISubject } from '../schema/subjectsSchema';

export interface ISchedule {
  studentClass: IClass | null
  schoolSubjects: ISubject[]
}

export interface IGradesSubjects {
  grades: IGrades | null
  subjects: ISubject[]
}
