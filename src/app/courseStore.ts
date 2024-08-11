import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface CourseState {
    courses: courseType[];
}
export interface courseType {
    id: number;
    completed?: boolean;
    title: string;
}

type UpdaterFunction<S extends object> = (prevState: S) => S;

const courseStore = (set: (updater: UpdaterFunction<CourseState>) => void) => ({
    courses: [],
    addCourse: (course: courseType) => {
        set((state: CourseState) => ({ courses: [...state.courses, course] }));
    },
    removeCourse: (courseId: number) => {
        set((state: CourseState) => ({ courses: state.courses.filter(c => c.id !== courseId) }));
    },
    toggleCourseStatus: (courseId: number) => {
        set((state: CourseState) => ({
            courses: state.courses.map((course: courseType) => course.id === courseId ?
                { ...course, completed: !course.completed } :
                course)
        }))
    }
});
export const useCourseStore = create(devtools(persist(courseStore, { name: "course" })))