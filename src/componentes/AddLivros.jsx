
 
function AddLivros() {
  return (
    <div>
        <h1 className='text-center'>Registro de Livros</h1>
        <form className='form text-center'>
            <input type="text" placeholder='Adicione um licro' className='input' />
            <button type='submit' className='add'>Adicionar</button>
        </form>

        <div className='registrodelivro'>
           <div className='item'>
            <span>Livro da Ana</span>
            <button className='del'>Eliminar</button>

           </div>
        <   div className='item completo'>
            <span>Livro da Ana</span>
            <button className='del'>Eliminar</button>

            </div>
        <button className='dt'> Eliminar todos</button>
        </div>
    </div>
  )
}

export default AddLivros