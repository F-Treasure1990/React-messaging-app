import './App.css';
import { Login } from './Login/Login';
import useLocalStorage from '../Hooks/useLocalStorage'
import { Dashboard } from './Dashboard/Dashboard';
import { ContactsProvider } from './Context/ContactsProvider';
import { ConversationsProvider } from './Context/ConversationsProvider';


function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider id={id}>
      <ConversationsProvider>
      <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )
  return (
    id ? dashboard : <Login onIdSubmit={setId}/> 
  );
}

export default App;
