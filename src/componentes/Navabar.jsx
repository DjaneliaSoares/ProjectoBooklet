



import  { useState } from 'react'
import  {Link } from 'react-scroll'
import {AiOutlineMenu} from 'react-icons/ai'

function Navabar() {
    const [menu, setMenu]= useState(false);
    const handleChange = ()=>{setMenu(!menu)};
  return (
    <>
    <div>
        <div className='flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div id='bg'>
                <Link to="/" className=' navigation font-semibold text-2xl p-1 cursor-pointer'>
                    BOOKLET
                
                </Link>
            </div>

            <nav className=' hidden md:flex gap-5 font-medium p-1 cursor-pointer'> 
          
         
            <a className=" navigation hover:text-brightGreen transition-all cursor-pointer" href='/' > Home </a>
           
                <a   className=" navigation hover:text-brightGreen transition-all cursor-pointer" href='/sobre' >Sobre</a>
                <a   className="navigation  hover:text-brightGreen transition-all cursor-pointer" href='/livro' > Livro</a>
                <a   className="navigation  hover:text-brightGreen transition-all cursor-pointer" href='/contacto'>Contacto</a>   
                
              
            </nav>
            <div className=' flex md:hidden' onClick={handleChange} id='bg' > 
                <div className='p-2' onClick={useState} >
                <AiOutlineMenu size={22}></AiOutlineMenu>
                  
                </div>

            </div>
        </div>

        <div className={
            `${
                menu ? "tanslate-x-0": "-translate-x-full"
            } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duraction-300`
        }>
        <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer">Home</Link>
                <Link to="Sobre" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer">Sobre</Link>
                <Link to="Livros" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer">Livros</Link>
                <Link to="contacto" spy={true} smooth={true} duration={500}  className="hover:text-brightGreen transition-all cursor-pointer">Contacto</Link>   
        </div>
    </div>
    </>
  )
}

export default Navabar