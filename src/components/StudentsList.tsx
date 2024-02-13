import { Student } from "../types/Student"
import StudentItem from "./StudentItem"

export default function StudentsList(){

    const students:Student[] = [
        {firstName:"Jack", lastName:"Sparrow", rating:15},
        {firstName:"Hermione", lastName:"Granger", rating:100},
        {firstName:"Alesha", lastName:"Popovich", rating:38},
        {firstName:"Olaf", lastName:"Snow", rating:56}
    ];
    return(
        <div>
            {
                students.map(e=> <StudentItem key={e.lastName} {...e}/>)
            }
                 
        </div>
    )
}