import React from 'react'

const Henkilot = ({ persons, filtered, remove }) => {

    const personNames = () => persons.filter(person =>
        person.name.toLowerCase().includes(filtered.toLowerCase())).map(person => {
        return <p key={person.id}>{person.name} {person.number}
            <button onClick={() => remove(person)}>delete</button></p>
    });

    return(
        <>
            {personNames()}
        </>
    )
};

    export default Henkilot