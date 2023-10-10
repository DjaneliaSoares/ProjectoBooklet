
import imagem1 from '../assets/img/Livro1.jpg'
import imagem2 from '../assets/img/Livro2.jpg'
import imagem8 from '../assets/img/Livro9.jpg'
import imagem6 from '../assets/img/Livro1.jpg'
import Modal from 'react-modal'
import React from 'react'
import Star from './Avaliacao'





const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
  overlay: { backgroundColor: 'rgba(54, 54, 54, 0.2)' }
};
Modal.setAppElement('#root');


function Cards() {
    
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  
  const st={
    backgroundColor:'white'
  }
 
  
   
      

    
      
 
    
  return (
    <section style={st}>
<br></br><br></br><br></br>
  <h1 className=' text-5xl font-semibold  text-center'>Novidades</h1>

    <br></br><br></br><br></br>
    <p className='cards grid grid-cols-2 gap-6 min-h-[95vh] flex flex-col md:flex-row md:justify-between items-center md:mx-40 mx-5 mt-50  '>

     
     <main className='w-full md:w-2/4 text-center  md:mx-40 '>
      <img src={imagem1} ></img>
      <br></br>
<h3 className=' text-1xl font-semibold  text-center'>Titulo: Esplendor da Honra</h3>
<p>Autor: Julie Garwood</p>
<br></br>
<Star/>
<br></br>

<button className='btn rounded-full' onClick={openModal}>Ler Livro</button>

<Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal" >
        <div className=' text-2xl font-semibold  text-center'>Titulo: Heroi Nas Highlands</div>
        <br></br>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)} >
      
Quem construiu Tebas, a das sete portas?
Nos livros vem o nome dos reis,<br></br>
Mas foram os reis que transportaram as pedras?
Babilónia, tantas vezes destruída.<br></br>
Quem outras tantas a reconstruiu? Em que casas
Da Lima Dourada moravam seus obreiros?<br></br>
No dia em que ficou pronta a Muralha da China para onde
Foram os seus pedreiros? A grande Roma<br></br>
Está cheia de arcos de triunfo. <br></br>Quem os ergueu? Sobre quem
Triunfaram os Césares? A tão cantada Bizâncio<br></br>
Só tinha palácios<br></br>
Para os seus habitantes? Até a legendária Atlântida
Na noite em que o mar a engoliu<br></br>
Viu afogados gritar por seus escravos.</h2>
<br></br>
      
      <div></div>
      <br></br>
      <form >
        <input />
        <button className='btn ' onClick={closeModal}>Sair</button> |
        
        <button className='btn'>Comente</button>
        
      </form>
    </Modal>

     </main>

     <main className='w-full md:w-2/4 text-center md:mx-40'>
      <img src={imagem2} ></img>
      <br></br>
      <h3 className=' text-1xl font-semibold  text-center'>Titulo: Lab Girl </h3>
<p>Autor: Hope Jahren</p>
<br></br>
<Star/>
<br></br>
<button className='btn rounded-full' onClick={openModal}>Ler Livro</button>

<Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">
        <div className=' text-2xl font-semibold  text-center'>Titulo: Lab Girl</div>
        <br></br>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
      
Quem construiu Tebas, a das sete portas?
Nos livros vem o nome dos reis,<br></br>
Mas foram os reis que transportaram as pedras?
Babilónia, tantas vezes destruída.<br></br>
Quem outras tantas a reconstruiu? Em que casas
Da Lima Dourada moravam seus obreiros?<br></br>
No dia em que ficou pronta a Muralha da China para onde
Foram os seus pedreiros? A grande Roma<br></br>
Está cheia de arcos de triunfo. <br></br>Quem os ergueu? Sobre quem
Triunfaram os Césares? A tão cantada Bizâncio<br></br>
Só tinha palácios<br></br>
Para os seus habitantes? Até a legendária Atlântida
Na noite em que o mar a engoliu<br></br>
Viu afogados gritar por seus escravos.</h2>
<br></br>
      
      <div></div>
      <br></br>
      <form >
        <input />
        <button className='btn ' onClick={closeModal}>Sair</button> |
        
        <button className='btn'>Comente</button>
        
      </form>
    </Modal>




 
     </main>
   

<main className='w-full md:w-2/4 text-center md:mx-40'>
 <img src={imagem8} ></img>
 <br></br>
 <h3 className=' text-1xl font-semibold  text-center'>Titulo: Heroi Nas Highlands </h3>
<p>Autor: Suzanne Enoch</p>
<br></br>
<Star/>
<br></br>
<button className='btn rounded-full' onClick={openModal}>Ler Livro</button>
<Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal" >
        <div className=' text-2xl font-semibold  text-center'>Titulo: Heroi Nas Highlands</div>
        <br></br>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
      
Quem construiu Tebas, a das sete portas?
Nos livros vem o nome dos reis,<br></br>
Mas foram os reis que transportaram as pedras?
Babilónia, tantas vezes destruída.<br></br>
Quem outras tantas a reconstruiu? Em que casas
Da Lima Dourada moravam seus obreiros?<br></br>
No dia em que ficou pronta a Muralha da China para onde
Foram os seus pedreiros? A grande Roma<br></br>
Está cheia de arcos de triunfo. <br></br>Quem os ergueu? Sobre quem
Triunfaram os Césares? A tão cantada Bizâncio<br></br>
Só tinha palácios<br></br>
Para os seus habitantes? Até a legendária Atlântida
Na noite em que o mar a engoliu<br></br>
Viu afogados gritar por seus escravos.</h2>
<br></br>
      
      <div>l</div>
      <br></br>
      <form >
        <input />
        <button className='btn ' onClick={closeModal}>Sair</button> |
        
        <button className='btn'>Comente</button>
        
      </form>
    </Modal>

</main>
<main className='w-full md:w-2/4 text-center md:mx-40'>
 <img src={imagem6} ></img>
 <br></br>
 <h3 className=' text-1xl font-semibold  text-center'>Titulo: Esplendor da Honra</h3>
<p>Autor: Julie Garwood</p>
<br></br>
<Star/>
<br></br>
<button className='btn rounded-full' onClick={openModal}>Ler Livro</button>

<Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"  ClassName='custom'>
        <div className=' text-2xl font-semibold  text-center'>Titulo: Heroi Nas Highlands</div>
        <br></br>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
      
Quem construiu Tebas, a das sete portas?
Nos livros vem o nome dos reis,<br></br>
Mas foram os reis que transportaram as pedras?
Babilónia, tantas vezes destruída.<br></br>
Quem outras tantas a reconstruiu? Em que casas
Da Lima Dourada moravam seus obreiros?<br></br>
No dia em que ficou pronta a Muralha da China para onde
Foram os seus pedreiros? A grande Roma<br></br>
Está cheia de arcos de triunfo. <br></br>Quem os ergueu? Sobre quem
Triunfaram os Césares? A tão cantada Bizâncio<br></br>
Só tinha palácios<br></br>
Para os seus habitantes? Até a legendária Atlântida
Na noite em que o mar a engoliu<br></br>
Viu afogados gritar por seus escravos.

</h2>


<br></br>
      
      <div></div>
      <br></br>
      <form >
        <input />
        <button className='btn ' onClick={closeModal}>Fechar</button> |
        
        <button className='btn'>Comente</button> |
        <button className='btn'>Baixar Livro</button>
        
      </form>
    </Modal>
    

</main>


     
     

    

    
      
 

    </p>

    <br></br>
<br></br><br></br>
<br></br><br></br>
<br></br>
  
  
  
       

        
        
    </section>    
  )
}

export default Cards