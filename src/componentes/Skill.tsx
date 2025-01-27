import {  ArrayLenguaje } from '../Arrays/Listas'


const Skill = () => {


    const ListItemsAnalitycs= ArrayLenguaje.filter(person =>
        person.categoria === 'Analitycs');  
        const listItemsWeb = ArrayLenguaje.filter(person =>
            person.categoria === 'Web');

    const ListWeb = listItemsWeb.map(person => 
    <><div className='descrskill'><p>{person.Lenguaje}</p><img src={person.icon}/><p>{person.nivel} </p>
    
    <div className="container_progress">s
    <div className="w3-grey" style={{height: '100px',margin:'-25px',
      backgroundColor: '#4CAF50', width: `${person.nivel_nro+30}%`, position: 'absolute',left: '0'}}></div>
    </div>
    </div></> )



    const ListAnalitycs = ListItemsAnalitycs.map(person => <>
    <div className='descrskill'><p>{person.Lenguaje}</p>
    <img src={person.icon}/><p>{person.nivel}</p>
    
    <div className="container_progress">s
    <div className="w3-grey" style={{height: '100px',margin:'-25px',
      backgroundColor: '#4CAF50', width: `${person.nivel_nro+30}%`, position: 'absolute',left: '0'}}></div>
    </div>
    
    </div></> )
    
    
  
    return (
    <>
    <img className='img_fondo_skill' src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww'></img>
    <center><h1 style={{paddingTop:'200px',color:'#12f7d6'}}>My Skill</h1></center>
    <center style={{color:'white', fontSize:'18px'}}>I am striving to never stop learning and improving</center>

    <div className='skill-titulo'><i className="bi bi-pc-display-horizontal"></i> <p>Web developement</p> </div>
    
    <div className='container-skill'>
    
      {ListWeb}
      </div>
      <div className='skill-titulo'><i className="bi bi-bar-chart-fill"></i> <p>Data Analitycs</p> </div>

      <div className='container-skill'>
      {ListAnalitycs}
      </div> 
  
    </>   
  )
}

export default Skill
