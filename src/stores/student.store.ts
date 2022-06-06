import Axios from "axios";
import { StatusCodes } from "http-status-codes";
import { action, observable, makeAutoObservable } from "mobx";
import { emptyStudent, Student } from "../models/student";
import API from "../utils/api";



class StudentStore {

    @observable student: Student = emptyStudent;
    @observable isLoadData: boolean = false;

    @observable errorLoading: boolean = false;
    @observable errorLoadingCode: number = -1;

    constructor () {
makeAutoObservable(this);
const student = localStorage.getItem("student");
if (student !== null){
this.student = JSON.parse(student? student : "{}");
this.isLoadData = true;
}
    }

@action    
setError(errorCode: number) {
this.errorLoading = true;
this.errorLoadingCode = errorCode;
}

getStudentFromAPI(id: number){
    
}

loadStudent(student: Student, callback: any){
    Axios.post('/api/student', student).then((data) => callback(data))
}
}

export default new StudentStore();