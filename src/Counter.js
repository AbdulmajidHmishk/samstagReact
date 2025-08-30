import React,{ useState } from "react"; 


function Counter () {
 const [gitCount , setCount] = useState(0); 
 return (
    <div>
        <p>Count : {gitCount} </p>
        <button onClick={()=> setCount(gitCount+1 )}> increase </button>
        <button onClick={()=> setCount(gitCount-1 )}> decrease </button>
        <button onClick={()=> setCount(0)}> Reset </button>
        <button onClick={()=> setCount(100)}> Max </button>
    </div>
 ); 


}

export default Counter ; 