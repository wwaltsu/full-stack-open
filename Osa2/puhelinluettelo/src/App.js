import React, { useState, useEffect } from 'react';
import personService from './services/personservice'
import Filtteri from "./components/Filtteri.js";
import LisaaHenkilo from "./components/LisaaHenkilo.js";
import Henkilot from "./components/Henkilot";
import Success from "./components/Success";
import Error from "./components/Error";

const App = () => {

    const [persons,setPersons] = useState([]);
    const [ newName, setNewName ] = useState('');
    const[ newNumber,setNewNumber] = useState('');
    const [filtered, setFiltered ] = useState('');
    const [success,setSuccess] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)

            })
    }, []);



    const remove = (personObject) => {
        if (window.confirm(`Poistetaanko ${personObject.name}`)) {
            personService.remove(personObject.id)
                .then(a => {
                personService.getAll()
                    .then(person => {
                    setPersons(person)
                })
            });
            setSuccess(
                `Removed' ${personObject.name} 'succesfully`
            );
            setTimeout(() => {
                setSuccess(null)
            }, 2000)
        }
    };



        const create = personObject => {
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson));
                    setNewName('');
                    setSuccess(
                        `Added ${personObject.name}`
                    );
                    setTimeout(() => {
                        setSuccess(null)
                    }, 2000)
                })


        };


    const update = (personObject) => {
        personService
            .update(personObject.id, personObject)
            .then(x => {
                setPersons(persons.map(person => person.id !== personObject.id ? person : personObject));
                setSuccess(
                    `Changed ${personObject.name}'s number`
                );
                setTimeout(() => {
                    setSuccess(null)
                }, 2000)
            })
            .catch(error => {
                setError(
                    `${personObject.name} is aldready deleted from the server`)
            });
        setTimeout(() => {
            setSuccess(null)
        }, 2000)
    };


    return (
        <div>
            <h3>Phonebook</h3>
            <div>
                <Filtteri filtered={filtered} setFiltered={setFiltered}/>
            </div>
            <Success message={success}/>
            <Error message={error}/>
            <h3>Add new</h3>
            <LisaaHenkilo
                newName={newName} setNewName={setNewName}
                newNumber={newNumber} setNewNumber={setNewNumber} persons={persons}
                setPersons={setPersons} create={create} update={update}
            />
            <h3>Numbers</h3>
            <Henkilot persons={persons} filtered={filtered} remove={remove}/>
        </div>
    )

};

export default App