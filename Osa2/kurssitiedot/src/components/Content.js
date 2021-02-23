import React from 'react'

const Content = ({parts}) => {
    const partList = () => parts.map(part => <div>{part.name} {part.exercises}</div>)


    return (
        <div>
            {partList()}
        </div>
    )
}

export default Content