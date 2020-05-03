import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const total = course.parts.reduce((sum, part) => (sum + part.exercises), 0)
    
    return(
      <p>Total of {total} exercises</p>
    ) 
  }
  
  const Part = ({ part }) => {
    return (
      <li>
        {part.name} {part.exercises}
      </li>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part =>
            <Part key={part.id} part={part} />
          )}
      </div>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />        
      </div>
    )
  }

  export default Course