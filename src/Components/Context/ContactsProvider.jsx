import React, { useContext } from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage'


const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export const ContactsProvider = ({ children }) => {
  const [ contacts, setContacts ] = useLocalStorage('contacts', [])

  function createContact(id, name) {
    setContacts(preContacts => {
      return [...preContacts, { id, name }]
    })
  }

  return (
    <div>
      <ContactsContext.Provider value={{contacts, createContact}}>
        { children }
      </ContactsContext.Provider>
    </div>
  )
}
