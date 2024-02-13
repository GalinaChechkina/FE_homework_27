import { useState } from "react";
import { Student } from "../types/Student";
export default function AddStudent(){

    const [formData, setFormData] = useState<Student>({firstName:"", lastName:"", rating:0});
    
    const handlerChange = (event:React.ChangeEvent<HTMLInputElement>):void=>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    };

    const handlerSubmit = (event:React.FormEvent):void=>{
        event.preventDefault();
    }
    return(
        <div>
            <p>Student addition form</p>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="firstName" value={formData.firstName} onChange={handlerChange}/>
                <input type="text" name="lastName" value={formData.lastName} onChange={handlerChange}/>
                <input type="number" name="rating" value={formData.rating} onChange={handlerChange}/>
                <button>Add</button>
            </form>
        </div>
    )
}