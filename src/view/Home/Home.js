import Tasks from "../../components/Tasks/Tasks";
import { useState, useEffect } from "react";
import "./Home.css";
import showToast from 'crunchy-toast';
import { faL } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const [task, setTask] = useState([
    {  id:1,
    date:"14-12-2043 saturday",
    tasktitle:"this is me",
    discription:" this is tara shahu",
    singnature:"c.m.adil",
    theme: '#224523'
    },
    {  id:2,
    date:"12-8-2043 sunday",
    tasktitle:"this is my brother",
    discription:"this akash shahu",
    singnature:"a.m.adil",
    theme:'#343aeb'
    },
    {  id:3,
    date:"10-9-2013 monday",
    tasktitle:"this is my sister",
    discription:"ythis is nandani shahu",
    singnature:"v.m.adil"
    },
  ]);
  const [date, setDate] = useState();
  const [tasktitle, setTasktitle] = useState("");
  const [discription, setDiscription] = useState();
  const [singnature, setSingnature] = useState();
  const [isedite, setIsedite] = useState(false);
  const [id, setId] = useState();

  // ------local storag----------

  useEffect(() => {
    const readlocal = JSON.parse(localStorage.getItem("list"));
    if (readlocal && readlocal.length > 0) {
      setTask(readlocal);
    }
  }, []);
  const settolocalstorage = (tassks) => {
    const varr = JSON.stringify(tassks);
    localStorage.setItem("list", varr);
  };

  function addlistinarray() {
    if (
      date == "" ||
      tasktitle == "" ||
      discription == "" ||
      singnature == ""
    ) {
      showToast('fill all  the input field', 'warning', 1000);
      return;
    }
    const randomid = Math.floor(Math.random() * 1000);
    // const findcolor="#"+(Math.floor(Math.random()*(256*265*256))).toString(16);
    var findcolor =
      "#" + Math.floor(Math.random() * (256 * 265 * 256)).toString(16);

    const obj = {
      id: randomid,
      date: date,
      tasktitle: tasktitle,
      discription: discription,
      singnature: singnature,
      theme: findcolor,
    };

    const newarr = [...task, obj];
    setTask(newarr);

    setDate("");
    setTasktitle("");
    setDiscription("");
    setSingnature("");
    //    if(task && task.length>0){
    settolocalstorage(newarr);

    //    }

    showToast('your task added succesfully', 'success', 3000);
  }
  function taskdeleteop(obj) {
    const index = task.indexOf(obj);
    let virtualarr = [];
    virtualarr = task;
    virtualarr.splice(index, 1);
    setTask([...virtualarr]);
    settolocalstorage(virtualarr);
    showToast('Your task has been deleted', 'alert', 1000);
  }
  // const [color,setColore]=useState()
  // useEffect(()=>{
  //     const findcolor="#" +
  //    (Math.floor(Math.random()*(256*265*256))).toString(16)
  //    setColore(findcolor)
  //    console.log(findcolor)
  // },[task])

  const editabletask = (id) => {
    setId(id);
    setIsedite(true);
    let storeelement;

    task.forEach((tasklist) => {
      if (tasklist.id === id) {
        storeelement = tasklist;
      }
    });
    setDate(storeelement.date);
    setTasktitle(storeelement.tasktitle);
    setDiscription(storeelement.discription);
    setSingnature(storeelement.singnature);
  };
  const setupdatedtaskaa = () => {
    let indexto;
    task.forEach((tasklist, i) => {
     if (tasklist.id == id) {
        indexto = i;
      }
    });
    let temparr = task;
    const findcolor =
      "#" + Math.floor(Math.random() * (256 * 265 * 256)).toString(16);
    temparr[indexto] = {
      id: id,
      date: date,
      tasktitle: tasktitle,
      discription: discription,
      singnature: singnature,
      theme: findcolor,
    };
    setTask([...temparr]);
    setDate("");
    setTasktitle("");
    setDiscription("");
    setSingnature("");
    settolocalstorage(temparr);
    setIsedite(false);
    showToast('Your task has been updated', 'info', 2000);
  };
  const clrearall=()=>{
    setDate("");
    setTasktitle("");
    setDiscription("");
    setSingnature("");
    setIsedite(false);

  }

  return (
    <div className="main-container">
      <div className="leftpart">
        <div className="main-heading">Your tasks</div>
          <div className="task">
        {task.map((info, index) => {
          const { id, date, tasktitle, discription, singnature, theme } = info;
          return (
            <Tasks
              id={id}
              date={date}
              tasktitle={tasktitle}
              discription={discription}
              singnature={singnature}
              taskdelete={taskdeleteop}
              obj={info}
              key={index}
              bgcolor={theme}
              editabletask={editabletask}
            />
          );
        })}
         </div>
      </div>
      <div className="rightpart">
    
        <div className="heading">
          {isedite ? `Update Your Task` : `Add Your Task`}
        </div>
        <div className="input-field">
          <input
            placeholder="enter date"
            value={date}
            onChange={(tasklist) => {
              setDate(tasklist.target.value);
            }}
          />

          <input
            placeholder="enter title"
            value={tasktitle}
            onChange={(e) => {
              setTasktitle(e.target.value);
            }}
          />

          {/* <input
            placeholder="enter discription"
            value={discription}
            onChange={(tasklist) => {
              setDiscription(tasklist.target.value);
            }}
         /> */}
         <textarea className="text-area" 
         rows="5" cols="33"
          placeholder="enter your discription"
          value={discription}
          onChange={(tasklist) => {
            setDiscription(tasklist.target.value);
          }}></textarea>
          <input
            placeholder="your singnature"
            value={singnature}
            onChange={(tasklist) => {
              setSingnature(tasklist.target.value);
            }}
          />
        </div>
        <button
          type="button"
          className="btn"
          onClick={isedite ? setupdatedtaskaa : addlistinarray}
        >
          {isedite ? "update" : "add"}
        </button>
        <button onClick={clrearall}  className="btn">clrearall</button>
       
      </div>
    </div>
  );
};
export default Home;
