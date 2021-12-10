import React, {useState} from "react";


function Toggle(){
    const [isOn, setIsOn] = useState(false);
    function handleClick() {
        setIsOn((isOn)) => !isOn);
    }
    // ...the rest of Toggle component
 return    <button onClick={handleClick}>{isOn? "ON" : "OFF"}</button>;
   
}