import { Student } from "../types/Student";

export default function StudentItem({firstName, lastName, rating}:Student){
    return(
        <div>
            <p>firstName: {firstName}</p>
            <p>lastName: {lastName}</p>
            <p>marks: {rating}</p>
        </div>
    )

}