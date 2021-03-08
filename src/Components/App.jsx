import './App.css';
import { Login } from './Login/Login';
import useLocalStorage from '../Hooks/useLocalStorage'
import { Dashboard } from './Dashboard/Dashboard';
import { ContactsProvider } from './Context/ContactsProvider';


function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )
  return (
    id ? dashboard : <Login onIdSubmit={setId}/> 
  );
}

export default App;
