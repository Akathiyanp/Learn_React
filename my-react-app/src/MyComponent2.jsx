
import React, {useState} from 'react'
export default function MyComponent2() {

    const [name, setName ] = useState("Guest")
    const [age, setAge] = useState(20)
    function handleAgeChange(event)
    {
        setAge(event.target.value)
    }

    function handleNameChange(event)
    {
        setName(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={age} onChange={handleAgeChange} />
            <p>Name: {age}</p>
        </div>
    )
}