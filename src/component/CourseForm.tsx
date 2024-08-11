import { Fragment, useState } from 'react';
import { useCourseStore } from "../app/courseStore";

const CourseForm = () => {
    const addCourse = useCourseStore((state) => state.addCourse);
    const [courseTitle, setCourseTitle] = useState('')

    const handleCourseSubmit = () => {
        if (!courseTitle) return (alert("Requirement Title!"))
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle
        })
        setCourseTitle("")
    }

    return (
        <Fragment>
            <div className='form-container'>
                <input
                    className='form-input'
                    value={courseTitle}
                    onChange={(e) => { setCourseTitle(e.target.value) }}
                />
                <button
                    className='form-submit-btn'
                    onClick={() => {
                        handleCourseSubmit()
                    }}
                >
                    add Course
                </button>
            </div>
        </Fragment>
    )
}

export default CourseForm