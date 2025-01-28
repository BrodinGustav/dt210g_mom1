import './App.css'
import Title from './Title';  //Importerar child-komponenten
import Hobby from './Hobby';

function App() {

  return (
    //Skriver ut titeln genom prop från child-komponenten samt listan över hobbys
    <>
      <div>
        <Title name="Min titel" />
      </div>

      <div className="banner">
        <img src="" alt="hero-banner"></img>
      </div>

    
      <Hobby />
    </>
  )
}

export default App
