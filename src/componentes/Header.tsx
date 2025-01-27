const logo="{CERN}"

export const Header = () => {


  return (
    <>
 <header> 
    <div>
       <h1>{logo}</h1>
    </div>
 <nav>
 <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">About</a></li>
  <li><a href="https://www.linkedin.com/in/christian-edmundo-ruiz-manrique/" target="_blank"><i className="bi bi-linkedin"></i></a>  <a href="https://www.instagram.com/edmundodeveloper/" target="_blank"><i className="bi bi-instagram"></i></a></li>
 
     </ul>
     </nav>
     </header>  
    </>
  )
}

export default Header
