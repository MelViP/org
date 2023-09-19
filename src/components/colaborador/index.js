import "./colaborardor.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {

    const { deletePerson, like } = props;
    const { name, job, photo, id, fav } = props.datos;

    const portada = props.portada;
    
    // fav= true ? show red heart : heart white


    return <div className="colaborador">
        <AiFillCloseCircle className="delete" onClick={() => deletePerson(id)}/>
        <div className="portada" style={portada}>
            <img src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{job}</h5>
            {fav ? <AiFillHeart color="red" onClick={ () => {like(id)}}/> : <AiOutlineHeart onClick={ () => {like(id)}}/>}
        </div>
    </div>
}

export default Colaborador;