import './App.css'
import Title from './Title';  //Importerar child-komponenten
import Hobby from './Hobby';
import heroBanner from './assets/pictures/hero-banner.png'; //Importerar hero-banner

function App() {

  return (
    //Skriver ut titeln genom prop från child-komponenten samt listan över hobbys
    <>
      <div>
        <Title name="Min boksamling" />
      </div>

      <div className="banner">
        <img className="heroImg" src={heroBanner} alt="hero-banner"></img>
      </div>

    
      <Hobby />
    
      <footer className="footer">
        <p>© 2025 Gustav Brodin - gueb0900@student.miun.se</p>
      </footer>
    </>
  )
}

export default App
