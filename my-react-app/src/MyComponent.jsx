import React, {useState} from "react";


export default function MyComponent() {
    const [isEmployed, setIsEmployed] = useState(false);
    function Employee() {
        setIsEmployed(!isEmployed);
    }

    const  [age, setAge] = useState(10)
    const updateAge = () => {
        setAge(age+1);
    }
    const [name, setName] = useState("guest");
    const updateName = () => {
        setName("akathiyan");
    }
    return(
        <div>
            <p>Employee: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={Employee}>set state</button>

            <p>Name: {name}</p>
            <button onClick={updateName}>set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>set Age</button>


        </div>
    )
}