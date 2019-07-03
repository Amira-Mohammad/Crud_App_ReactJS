import React from 'react';


const CourseForm = (props)=>{
    return (
        <form onSubmit={props.addCourse}>
            <input type = "text" onChange={props.updateCourse} value={props.current} />
            <button className="addButton" type = "submit">Add</button>
        </form>

    )
}
export default CourseForm;