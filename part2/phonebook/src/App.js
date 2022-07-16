import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/AddPerson'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(newName + " is already in the phonebook")
      return
    }
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const personsToShow = nameFilter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={nameFilter} onChange={handleFilterChange}></Filter>
      <PersonForm onSubmit={addNewPerson} newName={newName} onChangeName={handleNameChange} newNumber={newNumber} onChangeNumber={handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.id} person={person}></Person>
        )}
      </ul>
    </div>
  )
}

export default App