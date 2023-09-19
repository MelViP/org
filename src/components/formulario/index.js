import "./Formulario.css";
import Campo from "../campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {
  const [name, getName] = useState(``);
  const [job, getJob] = useState(``);
  const [photo, getPhoto] = useState(``);
  const [team, getTeam] = useState(``);

  const [title, getTitle] = useState("");
  const [color, getColor] = useState("");

  const {registrarColaborador, newTeam} = props;

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

  const manageNewTeam = (e) => {
    e.preventDefault();
    newTeam({title, colorPrimario: color})
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>

        <Campo
          titulo="Nombre"
          placeholder="nombre"
          value={name}
          getValue={getName}
        />

        <Campo
          titulo="Puesto"
          placeholder="puesto"
          value={job}
          getValue={getJob}
        />

        <Campo
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

      <form onSubmit={manageNewTeam}>
        <h2>Rellena el formulario para crear el equipo.</h2>

        <Campo
          titulo="Titulo"
          placeholder="ingresar titulo"
          value={title}
          getValue={getTitle}
        />

        <Campo
          titulo="Color"
          placeholder="Ingresar Hexadecimal"
          value={color}
          getValue={getColor}
          type="color"
        />

        <Boton>Registrar</Boton>
      </form>
    </section>
  );
};

export default Formulario;
