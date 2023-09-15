import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {
  const [name, getName] = useState(``);
  const [job, getJob] = useState(``);
  const [photo, getPhoto] = useState(``);
  const [team, getTeam] = useState(``);

  const {registrarColaborador} = props;

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    let sendValue = {
      name,
      job,
      photo,
      team
    };
    registrarColaborador(sendValue);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>

        <CampoTexto
          titulo="Nombre"
          placeholder="nombre"
          value={name}
          getValue={getName}
        />

        <CampoTexto
          titulo="Puesto"
          placeholder="puesto"
          value={job}
          getValue={getJob}
        />

        <CampoTexto
          titulo="Foto"
          placeholder="foto"
          value={photo}
          getValue={getPhoto}
        />

        <ListaOpciones
            value={team}
            getValue={getTeam}
            teams={props.teams}
        />

        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
