import React, { useContext, useState } from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'


const ConversationsContext = React.createContext()


export function useConversations() {
  return useContext(ConversationsContext)
}

export const ConversationsProvider = ({ id, children }) => {
  const [ conversations, setConversations ] = useLocalStorage('conversations', [])
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
  const { contacts } = useContacts()

  function createConversation(recipients) {
    setConversations(prevConversations => {
      return [...prevConversations, { recipients, message: []}]
    })
  }

  function addMessageToConversation({ recipients, text, sender }) {
    
  }

  function sendMessage(recipients, text) {
    addMessageToConversation({ recipients, text, sender:id })
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      
      const contact = contacts.find(contact => {
        return contact.id === recipient
      })

      const name = (contact && contact.name) || recipient
      return { id : recipient, name}
    })
      const selected = index === selectedConversationIndex
      return { ...conversation, recipients, selected}
  })

  const value = {
    conversations : formattedConversations,
    selectConversationIndex : setSelectedConversationIndex,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    createConversation
  }


  return (
    <div>
      <ConversationsContext.Provider value={value}>
        { children }
      </ConversationsContext.Provider>
    </div>
  )
}
