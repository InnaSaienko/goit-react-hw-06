import s from './App.module.css'
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

function App() {
  return (
      <div className={s.main}>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
      </div>
  )
}

export default App
