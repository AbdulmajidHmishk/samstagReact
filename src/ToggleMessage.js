import React,{ useState } from "react";


function ToggleMessage () {
    const [show , setShow ] = useState(false); 
    return <div>

        <button onClick={()=>setShow(!show)}>
        {show ? "Hide" : "Show"}
        </button>

    </div>
}

export default ToggleMessage ; 