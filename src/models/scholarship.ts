import { ScholarshipType } from "./scholarshipType";
import { StateRequest } from "./stateRequest";
import { emptyStudent, Student } from "./student";

export interface Scholarship {
id: number,
student: Student;
state: StateRequest;
typeScholarship:             ScholarshipType;
}

export const emptyScholarship: Scholarship = { id: -1, student: emptyStudent, state: StateRequest.InStudy, typeScholarship: ScholarshipType.Media};