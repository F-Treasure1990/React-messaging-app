import React from 'react'
import { useConversations } from '../Context/ConversationsProvider'
import { Openconversation } from '../OpenConversation/Openconversation'
import { Sidebar } from '../Sidebar/Sidebar'

export const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations()
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={id} />
      {selectedConversation && <Openconversation />}
    </div>
  )
}
