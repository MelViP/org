import "./MiOrg.css";

const MiOrg = (props) => {
//const [nombreVariable, funcionqueActualiza] = useState(valorInicial)
    return <section className="orgSection">
        <h3>Mi organización</h3>
        <img src="/img/addBtn.svg" alt="add" onClick={props.unshowShow}/>
    </section>
}

export default MiOrg;