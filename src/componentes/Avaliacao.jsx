
import{useState} from 'react'
import {FaStar} from 'react-icons/fa'


function Star() {
  const [rating, setRating]=useState(null);
  const [hover, setHover]=useState(null);
  return (
    <p>
       <p> A sua classificação é {rating}</p> 
    
    <main className=' grid grid-cols-5 text-center'>
   
      {[...Array(5)].map((estrela, index) => {
        const currentRating = index + 1;
        return( 

             <label>
              <input type='radio' name='rating' value={currentRating} onClick={()=>setRating(currentRating)}/>
              <FaStar size={20} className='star'
              color={currentRating <=(hover || rating) ? "#ffc107" : "e4e5e9"} 
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={()=>setHover(null)} /> 
          
              </label>
           );

         
         }
          )
           } 
          
      </main>
       
      </p>
  )
}

export default Star