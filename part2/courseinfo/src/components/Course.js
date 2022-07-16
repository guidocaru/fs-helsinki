const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
    const total = parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}


const Part = ({ name, exercises }) =>
    <p>
        {name} {exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
        )}
    </>

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
        </div>
    )
}

export default Course