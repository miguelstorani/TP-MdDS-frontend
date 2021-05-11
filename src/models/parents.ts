import { EnumDeclaration } from "typescript";
import { Relationship } from "./relationship";
import { emptyScholarship, Scholarship } from "./scholarship";
import { emptySchool, School } from "./school";
import { emptyUser } from "./user";

export interface Parents {
id: number,
name: string;
lastName: string;
age: number,
occupation: string;
workPlace: string;
money: number,
live: boolean;
relation: Relationship;
school: School;
scholarship: Scholarship;
}

export const emptyParent: Parents = { id: -1, name: "", lastName: "", age: -1, occupation: "", workPlace: "", money: -1, live: false, relation: Relationship.Empty, school: emptySchool, scholarship: emptyScholarship};