import "./CampoTexto.css"
// import { useState } from "react"

const CampoTexto = (props) => {

    const getValueChange = (e)=>{
        props.getValue(e.target.value);
    }

    const placeHolder = `Ingresar ${props.placeholder}`;

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input  
            placeholder={placeHolder} 
            value={props.value}
            onChange={getValueChange}
        />
    </div>
}

export default CampoTexto;