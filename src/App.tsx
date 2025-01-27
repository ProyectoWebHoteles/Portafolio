
import {Aboutme, Header,Portada} from './componentes';

import './App.css'
import './Estilos/Style.css'
import  logo from './assets/img/Imagen1.png';
import Skill from './componentes/Skill';
function App() {
  // const [count, setCount] = useState(0)
const image2=logo;
  return (
    <>
    
  
      <Header/>
      <Portada imagen={image2}/>
      <Aboutme/>
      <Skill/>
    </>
  )
}

export default App
