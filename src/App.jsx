
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/home'
import Sobre from './componentes/Sobre'
import Livros from './componentes/Livros'
import Contacto from './componentes/Contacto'

function App() {
  

  return (
   
      <div >
        <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
      <Route path='/livro' element={<Livros/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
     </Routes>
     </BrowserRouter>
      
      <main>
        <div >
         
        </div>
      </main>
      </div>
      
    
  )
}

export default App
