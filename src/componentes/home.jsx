import { Link } from "react-scroll"
import Button from "./layout/Button"
import Img from '../assets/img/course2-removebg-preview.png'
import Navabar from './Navabar'
import Cards from "./Cards"
import Footer from "./Footer"


function Home() {
  
    
 
  return (
    <div >
      <Navabar></Navabar>
      <div >

       <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10 " >
           <div className="md:w-2/4 text-center" id="bg">  
              <h2 className="text-5xl font-semibold leading-tight">Os Melhores livros</h2>
              <span className=" text-5xl font-semibold text-brightGreen">Booklet</span>

              <p className="text-lightText mt-5 text-start">
                 Ler um bom livro nos proporciona viajar e conhecer o outro 
                 lado do mundo A leitura é uma porta aberta para um mundo de 
                 descobertas sem fim.A paixão da leitura é a mais inocente, 
                 aprazível e a menos dispendiosa.visite os nossos Booklet 
                 Virtual e comece a viajar pelo nundo!
             </p>
             <Link to="contacto" spy={true} smooth={true} duration={500}>
                <Button title="Contacta nos"></Button>
             </Link>
           </div>
           <p className="w-full md:w-2/4" >
               <img src={Img}/>
           </p>
         </div>
       </div>
       
       <div>
          <Cards/>
       </div>
       
       
       
<Footer></Footer>


    </div>
   

  )
}

export default Home