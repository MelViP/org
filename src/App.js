import "./App.css";
import Header from "./components/header";
import Formulario from "./components/formulario";
import MiOrg from "./components/MiOrg";
import { useState } from "react";
import Equipo from "./components/equipo";
import Footer from "./components/footer";

function App() {
  // Ternario --> condicion ? accion : accionContraria
  const [showForm, updateShow] = useState(true);
  const [colaboradores, actualizarColaborador] = useState([{
    job: "jr developer",
    name: "Mel",
    photo: "https://github.com/MelViP.png",
    team: "Front End"
  }]);

  const unshowShow = () => {
    updateShow(!showForm);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log( `Nuevo colaborador `, colaborador);
    //spread operator crea copia de datos actuales y se la agrega al colaborador
    actualizarColaborador([...colaboradores, colaborador]);
  }

  //lista de equipos
  const teams = [
    {
      title: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#d9f7e9",
    },
    {
      title: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      title: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2",
    },
    {
      title: "DevOps",
      colorPrimario: "#e06d69",
      colorSecundario: "#fde7e8",
    },
    {
      title: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      title: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9",
    },
    {
      title: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    }    
  ];  

  return (
    <div className="App">
      
      <Header />
      
      {
      showForm && <Formulario 
          teams={teams.map( (team) => team.title)}
          registrarColaborador={registrarColaborador}
        />
      }
      
      <MiOrg unshowShow={unshowShow} />

      {
      teams.map( (equipo) => <Equipo 
        datos={equipo}
        key={equipo.title}
        colaboradores={colaboradores.filter( colaborador => colaborador.team === equipo.title )}
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
