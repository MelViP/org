import "./Equipo.css";
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

  const { colorPrimario, colorSecundario, title, id } = props.datos;

  const { colaboradores, deletePerson, colorPicker, like } = props;

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.5),
  };
  const titleStyle = {
    borderColor: colorPrimario,
  };
  const portada = {
    backgroundColor: colorPrimario,
  };
  
  return <>
    { 
      colaboradores.length > 0 &&

        <section className="equipo" style={obj}>

          <input 
            type="color"
            className="colorPicker"
            value={colorPrimario}
            onChange={(e)=>{
              colorPicker(e.target.value, id)
            }}
          />

          <h3 style={titleStyle}>{title}</h3>

          <div className="colaboradoresCards">
            {
              colaboradores.map((colaborador, index) => ( <Colaborador 
                            key={index} 
                            datos={colaborador} 
                            portada={portada}
                            deletePerson={deletePerson} 
                            id={id}
                            like={like}
                          /> 
                      )
                      )
            }
          </div>

        </section>
    }
    </>
};

export default Equipo;
