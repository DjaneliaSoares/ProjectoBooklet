

const Button= (props) =>{
  return (
    <div id="bg">
        <button className="bg-white py-2 px-5 rounded-full mt-4 " id="buton" >
            {props.title}
   
      </button>
    </div>
  )
}

export default Button