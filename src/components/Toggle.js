import React,{useState} from "react";
const Toggle = () => {
    const [isOff, setIsOff] = useState(true);
  
    return (
      <button onClick={() => setIsOff(!isOff)}>{ isOff ? 'ON' : 'OFF' }</button>
    );
  }

  export {Toggle}