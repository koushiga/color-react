import colors from 'color-name';

const Input = ({colorValue,setColorValue,isDarkText,setIsDarkText}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    
        <input 
            autoFocus
            type='text'
            placeholder='Add Color Name'
            required
            value={colorValue}
            onChange={(e)=>{setColorValue(e.target.value)}
            }
        />    
        <button
            type='submit'
            onClick={()=>setIsDarkText(!isDarkText)}
        >Toggle Text Color</button>        
    </form>
  )
}

export default Input