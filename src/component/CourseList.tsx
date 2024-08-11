import { Fragment } from 'react'
import { courseType, useCourseStore } from '../app/courseStore'

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore((state) => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus
  }))

  return (
    <Fragment>
      <ul>
        {courses.map((course: courseType) => {
          return (
            <Fragment key={course.id}>
              <li className='course-item'
                style={{ backgroundColor: course.completed ? "lightgreen" : "white" }}
              >
                <span className='course-item-col-1'>
                  <input checked={course.completed}
                    type="checkbox"
                    onChange={() => {
                      toggleCourseStatus(course.id)
                    }} />
                </span>
                <span style={{ color: 'black' }}>{course?.title}</span>
                <button onClick={() => {
                  removeCourse(course.id)
                }}
                  className='delete-btn'>clear</button>
              </li>
            </Fragment>
          )
        })}
      </ul>
    </Fragment>
  )
}

export default CourseList