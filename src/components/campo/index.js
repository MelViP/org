import "./Campo.css"
// import { useState } from "react"

const Campo = (props) => {

    const getValueChange = (e)=>{
        props.getValue(e.target.value);
    }
    const { type = "text" } = props;

    console.log(props.type)

    const placeHolder = `Ingresar ${props.placeholder}`;

    return <div className={ `campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input  
            placeholder={placeHolder} 
            value={props.value}
            onChange={getValueChange}
            type={type}
        />
    </div>
}

export default Campo;