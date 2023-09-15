import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const actualizarValor = (e) => {
        props.getValue(e.target.value)
    }

    /*HOW TO:
    metodo map: arreglo.map( (equipoData, index o posicion del arreglo) => {
        return <option></option>
    })*/


    return <div className="lista-opciones">

        <label>Equipos</label>

        <select value={props.value} onChange={actualizarValor}> 

            <option 
            className="defaultOption" 
            value="" defaultValue=""
            disabled hidden>
                Selecciona un equipo
            </option>

            {props.teams.map( (equipo, index) => 
                <option key={index} value={equipo}>{equipo} </option>
                )
            }

        </select>
    </div>
}

export default ListaOpciones;