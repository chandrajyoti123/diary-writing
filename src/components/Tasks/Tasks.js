


import './Tasks.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Tasks=({id,date,tasktitle,discription,singnature , taskdelete,obj, bgcolor})=>{
    return(
        <div className="task-container" id={id} style={{backgroundColor:bgcolor}} >
           <div className="date">{date}</div>
            <div className="task-title">{tasktitle}</div>
            <div className="discription">{discription}</div>
            <div className="singnature">{singnature}</div>
            <div className='trashcontainer' > <FontAwesomeIcon icon={faTrash} onClick={()=>{taskdelete(obj)}} className='trash'/></div>
            <div className='editcontainer'>✍</div>

        </div>
    )

}
export default Tasks;