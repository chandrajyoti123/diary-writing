import './Tasks.css'
const Tasks=({id,date,tasktitle,discription,singnature})=>{
    return(
        <div className="task-container">
           <div className="date">{date}</div>
            <div className="task-title">{tasktitle}</div>
            <div className="discription">{discription}</div>
            <div className="singnature">{singnature}</div>

        </div>
    )

}
export default Tasks;