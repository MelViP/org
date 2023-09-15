import "./colaborardor.css";

const Colaborador = (props) => {

    const portada = props.portada;
    const {
        name,
        job,
        photo,
    } = props.datos;


    return <div className="colaborador">
        <div className="portada" style={portada}>
            <img src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{job}</h5>
        </div>
    </div>
}

export default Colaborador;