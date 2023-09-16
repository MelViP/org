import "./Equipo.css";
import Colaborador from "../colaborador";

const Equipo = (props) => {
  const { colaboradores } = props;

  const { colorPrimario, colorSecundario, title } = props.datos;

  const obj = {
    backgroundColor: colorSecundario,
  };
  const titleStyle = {
    borderColor: colorPrimario,
  };
  const portada = {
    backgroundColor: colorPrimario,
  };
   
  console.log("pruebra: "+ colaboradores.lenght > 0)
  
  return <>
    { 
      colaboradores.length > 0 &&

        <section className="equipo" style={obj}>

          <h3 style={titleStyle}>{title}</h3>

          <div className="colaboradoresCards">
            {
              colaboradores.map((colaborador, index) => ( <Colaborador 
                            key={index} 
                            datos={colaborador} 
                            portada={portada} 
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
