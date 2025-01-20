import { AiOutlineUpCircle, AiOutlineUserAdd } from "react-icons/ai";
import "./MiOrg.css"

const MiOrg = (props) => {
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        {props.mostrar ? <AiOutlineUpCircle alt="close" onClick={props.cambiarMostrar} className="boton" /> : <AiOutlineUserAdd alt="add" className="boton" onClick={props.cambiarMostrar} />}
    </section>
}

export default MiOrg