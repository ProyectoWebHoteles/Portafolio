import {  ArrayAboutMe } from '../Arrays/Listas'


export const Aboutme = () => {

    const AboutDescription = ArrayAboutMe[0].descripcion;
     

return (
    <div className='AboutMe'>
        <img src="https://w0.peakpx.com/wallpaper/41/600/HD-wallpaper-connectivity-digital-blue-abstract-background-android-technology.jpg" alt="" />
      <div className='Descr_About'>
      <div>
        <h1>About Me</h1>
       </div>
       <div className='Descr_About_2'>
        <p style={{color:'#12f7d6', fontSize:'35px'}}>Hello! </p>
        <p>{AboutDescription}</p>
        </div>
      </div>

      <div className='Aboutimg'>
         <img src="https://burst.shopifycdn.com/photos/software-developer-on-php-code.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
      </div>
    </div>
  )
}

export default Aboutme
