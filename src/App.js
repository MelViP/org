import "./App.css";
import Header from "./components/header";
import Formulario from "./components/formulario";
import MiOrg from "./components/MiOrg";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Equipo from "./components/equipo";
import Footer from "./components/footer";

function App() {
  // Ternario --> condicion ? accion : accionContraria
  const [showForm, updateShow] = useState(false);
  const [colaboradores, actualizarColaborador] = useState([
    {
      id: uuidv4(),
      job: "jr developer",
      name: "Mel",
      photo: "https://github.com/MelViP.png",
      team: "Front End",
      fav: false
    },
    {
      id: uuidv4(),
      job: "estratéga de marketing",
      name: "Johans",
      photo: "https://imgs.search.brave.com/RqElRW8Ledaj7Z-lQKPyirM2MrwN-DdVTPqQXr_6VLQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9nYXRpdG8tZXVy/b3Blby1wZWxvLWNv/cnRvLWp1Z2FuZG8t/c3VzLXBhdGFzLWFp/c2xhZGFzLWJsYW5j/b18xOTE5NzEtMTk2/NzIuanBnP3NpemU9/NjI2JmV4dD1qcGc",
      team: "Innovación y Gestión",
      fav: true
    }

  ]);
  const [teams, updateTeams] = useState([
    {
      id: uuidv4(),
      title: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#d9f7e9",
    },
    {
      id: uuidv4(),
      title: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      id: uuidv4(),
      title: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2",
    },
    {
      id: uuidv4(),
      title: "DevOps",
      colorPrimario: "#e06d69",
      colorSecundario: "#fde7e8",
    },
    {
      id: uuidv4(),
      title: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      id: uuidv4(),
      title: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9",
    },
    {
      id: uuidv4(),
      title: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    }
  ]);


  const unshowShow = () => {
    updateShow(!showForm);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {    //spread operator crea copia de datos actuales y se la agrega al colaborador
    actualizarColaborador([...colaboradores, colaborador]);
  }
  //eliminar colaborador
  const deletePerson = (id) => {
    const newPerson = colaboradores.filter( (colaborador) => colaborador.id !== id );
    actualizarColaborador(newPerson)
  } 

  //actualizar color
  const colorPicker = (color, id) => {
    console.log("actualizar: ", color, id)
    const updatedTeams = teams.map( (equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo;
    } )
    updateTeams(updatedTeams)
  }

  //crear equipo
  const newTeam = (newTeam) => {
    updateTeams([...teams, {...newTeam, ui: uuidv4() }])
  }

  //like or nah
  const like = (id) => {
    console.log(`like`, id)
    const updateLike = colaboradores.map((colaborador)=>{
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador
    })
    actualizarColaborador(updateLike)
  }

  return (
    <div className="App">
      
      <Header />
      
      {
      showForm && <Formulario 
          teams={teams.map( (team) => team.title)}
          registrarColaborador={registrarColaborador}
          newTeam={newTeam}
        />
      }
      
      <MiOrg unshowShow={unshowShow} />

      {
      teams.map( (equipo) => <Equipo 
        deletePerson={deletePerson}
        datos={equipo}
        key={equipo.title}
        colaboradores={colaboradores.filter( colaborador => colaborador.team === equipo.title )}
        colorPicker={colorPicker}
        like={like}
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
