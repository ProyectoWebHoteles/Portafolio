import { ArrayLenguaje } from "../Arrays/Listas";


interface HijoProps {
  
    imagen: string;
  }

export const Portada:React.FC<HijoProps> = ({imagen}) => {


const CV_Documentado= "https://drive.google.com/uc?export=download&id=17AXsmKEuAp_sEcwsAw9ctdyuhCWgehmi";

const listItemsWeb = ArrayLenguaje.filter(person =>
  person.categoria === 'Web');

  const ListItemsAnalitycs= ArrayLenguaje.filter(person =>
    person.categoria === 'Analitycs');  

const ListWeb = listItemsWeb.map(person => <p>{person.Lenguaje}</p>)
const ListAnalitycs = ListItemsAnalitycs.map(person => <p>{person.Lenguaje}</p>)


  

  return (
    <div className="Portada">
        <div className="divContacto">
            <div className="img_perfil"> 
                <div className="subimg_perfil">
                <img src={imagen} alt="Perfil" />
             
            
             </div> 
            <p >Christian Ruiz</p>
            <p style={{fontSize:'8px'}}>Full-Stack y Analista</p>
            </div>
            <div className="contacto_descr">   
            <p> <i className="bi bi-envelope"></i> christianruiz1404@gmail.com</p>
            <p> <i className="bi bi-phone"></i> +51 936193168 </p>
       
            </div>  
            <div className="tecnologias">
             <div className="gr_tecnologias"> {ListWeb}</div>
             <div className="gr_tecnologias"> {ListAnalitycs} </div>
           
            </div>
           <a  className="download"  

           href={CV_Documentado} target="_blank" download="CV_Documentado">Download CV <i className="bi bi-download"></i></a>
        </div>
      <div className="divMedio" >
        <h3 className="Titulo_Profesion">Developer</h3>
        <h3 className="Saludo">Hi</h3>
        <h3 className="Nombre">I'm <span style={{color:'#97F9EB'}}>Christian</span></h3>
        <h3 className="descripcion">Full-Stack and Data Analitycs</h3>
        <p className="descripcion2">Graduated in Computing and Informatics, I am capable of formulating and implementing web development plans according to the company's objectives in the short, medium and long term, as well as making projects, designing technological training plans and perfecting plans, are functions . outstanding, abilities to obtain and analyze information, ability to synthesize.
        </p>
        <p className="descr_email">let’s talk <a href="mailto:christianruiz1404@gmail.com" target="_blank">✉</a></p>
      </div>
      <div className="divResumen">
        <div>
           
        </div>

      </div>
      
    </div>
  )
}

export default Portada
