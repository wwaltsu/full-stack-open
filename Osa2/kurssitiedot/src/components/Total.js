import React from 'react'


const Total = ({exercises}) => {
    const total = exercises.reduce((sum, exe) => sum + exe)
    console.log("total = ",total)

    return(
        <>
            <b> Total of {total} exercises </b>
        </>
    )
}

export default Total