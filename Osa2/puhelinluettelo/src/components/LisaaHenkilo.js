import React from 'react'

const LisaaHenkilo = ({create,setNewName, newNumber, setNewNumber,update,persons,setPersons,newName}) => {

    const handleNumberChange = (event) =>
        setNewNumber(event.target.value);

    const handleNameChange = event =>
        setNewName(event.target.value);



    const addToList = (event) => {
        event.preventDefault();
        const isAldreadyAdded = persons.find(person => person.name === newName);
        const personObject = {
            name: newName,
            number: newNumber,
        };


        if(isAldreadyAdded !== undefined && isAldreadyAdded.name.includes(newName)) {
            updatePerson(isAldreadyAdded, newNumber)
        }else{
            setPersons(create(personObject) || persons.concat(personObject));

            setNewName("")
            setNewNumber("")
        }




    };
    const updatePerson = (person, newNumber) => {
        if(window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`))
            update({...person, number: newNumber})
    };
    return(
        <>

            <form onSubmit={addToList}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
};
export default LisaaHenkilo