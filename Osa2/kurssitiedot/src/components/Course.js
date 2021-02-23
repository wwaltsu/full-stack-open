import React from 'react'
import Content from './Content.js'
import Total from './Total.js'
import Header from './Header.js'

const Course = ({course}) => {
    const exercises = () => course.parts.map(part => part.exercises)
    return (
        <>
            <Header name={course.name}/>
            <Content parts={course.parts} />
            <Total exercises={exercises()}/>

        </>
    )
}

export default Course