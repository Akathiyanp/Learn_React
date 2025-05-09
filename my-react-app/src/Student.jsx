
export default function Student(props) {

    return(
        <>
            <div className="student-card">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>

        </>
    )
}

