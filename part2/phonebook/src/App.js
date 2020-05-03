import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Person = ({ person }) => {
  return(
    <p>{person.name} {person.number}</p>
  )
}

const Filter = (props) => {
  return(
    <div>
    <p>Search:</p>
      <input 
        value={props.text}
        onChange={props.handler}
      />
    </div>
  )
}

const PersonForm = (props) => {
  return(
    <form onSubmit={props.submit}>
        <div>
          name: <input 
          value={props.name}
          onChange={props.nameHandler}
          />
        </div>
        <div>
          number: <input 
          value={props.number}
          onChange={props.numHandler}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
  )
}

const App = () => {
  const[persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  
  const hookPersons = () => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hookPersons, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(persons.some(person => person.name === newName)){
      alert(`${newName} found in Phonebook.`)
      setNewName('')
      setNewNumber('')
    } else {
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
}
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  
  const searchFilter = !searchTerm 
  ? persons 
  : persons.filter(
      person => person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text={searchTerm} handler={handleSearchChange}/>
      <h3>Add a new number</h3>
      <PersonForm 
        submit={ addName } 
        name={ newName }
        nameHandler={ handleNameChange }
        number={ newNumber } 
        numHandler={ handleNumberChange }
        />
      <h2>Numbers</h2>
      {searchFilter.map(person => 
        <Person key={person.name} person={person} />
        )}
    </div>
  )
} 

export default App;
