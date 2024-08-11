import './App.css';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';

function App() {
  return (
    <div className='main-container'>
      <h1 style={{
        fontSize: "2rem",
        marginBottom: "2rem"
      }}>
        List of my courses
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
