import './Tasks.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Tasks=({id,date,tasktitle,discription,singnature , taskdelete,obj})=>{
    return(
        <div className="task-container" id={id}>
           <div className="date">{date}</div>
            <div className="task-title">{tasktitle}</div>
            <div className="discription">{discription}</div>
            <div className="singnature">{singnature}</div>
            <div className='trashcontainer' > <FontAwesomeIcon icon={faTrash} onClick={()=>{taskdelete(obj)}} className='trash'/></div>

        </div>
    )

}
export default Tasks;