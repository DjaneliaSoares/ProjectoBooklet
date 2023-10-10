const color={
position:'absolut',
top:0,
left:0,
backgroundColor: 'white',

}



function Footer() {
  return (
    
    <div  >
        <div className=" grid grid-cols-3 gap-6 min-h-[40vh] flex flex-col md:flex-row md:justify-between items-center md:mx-40 mx-5 mt-50   ">
        <section>
        <h4 className="text-xl font-semibold "> Páginas</h4>
        <br></br>
        
        <li>Home</li>
        <li>Sobre</li>
        <li>Livros</li>
        <li>Booklet</li>
        
        </section>
      
        <section>
        <h4 className="text-xl font-semibold  "> Redes Socias</h4>
        <br></br>
        <li>Instragran</li>
        <li>Facebook.</li>
        <li>Linkdin</li>
        <li>Twitter</li>

      
        </section>

        <section>
        <h4 className="text-xl font-semibold  "> Contacto</h4>
        <br></br>
        <li>Email: booklet@gmail.com</li>
        <li>Telefone: +244-942370061</li>
        <li>Endereço:Luanda-Angola </li>
        
        </section>



       
        


        </div>
        <section style={color}>
       <p className=" font-semibold ">©BOOKLET</p> 
        </section>
        
        </div>
       
  )
}

export default Footer