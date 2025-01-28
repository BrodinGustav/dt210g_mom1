import './App.css'
import Title from './Title';  //Importerar child-komponenten

function App() {
 
  return (
    //Skriver ut titeln genom prop från child-komponenten
    <div>
    <Title name="Min titel" />  
    </div>
  )
}

export default App
