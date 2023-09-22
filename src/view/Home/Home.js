import Tasks from "../../components/Tasks/Tasks";
import { useState,useEffect } from "react";
import './Home.css'
const Home=(()=>{
    const [task,setTask]=useState([
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
        // {  id:3,
        // date:"10-9-2013 monday",
        // tasktitle:"this is my sister",
        // discription:"ythis is nandani shahu",
        // singnature:"v.m.adil"
        // },

    ])
    const [date, setDate]=useState();
    const [tasktitle, setTasktitle]=useState('');
    const [discription, setDiscription]=useState();
    const [singnature, setSingnature]=useState();
    
    // ------local storag----------

    useEffect(()=>{
        const readlocal=JSON.parse(localStorage.getItem("list"))
      if(readlocal && readlocal.length>0){
        setTask(readlocal)
      }
           },[])
            const settolocalstorage = (tassks) =>{
                const varr=JSON.stringify(tassks)
                localStorage.setItem("list",varr)
            }
   
    function addlistinarray(){
      if(date=="" || tasktitle=="" || discription=="" || singnature==""){
        return
      }
        const randomid= Math.floor((Math.random()*1000))
        // const findcolor="#"+(Math.floor(Math.random()*(256*265*256))).toString(16);
        const findcolor="#"+(Math.floor(Math.random()*(256*265*256))).toString(16);
        console.log(findcolor)
       
       
        const obj={
            id:randomid,
            date:date,
            tasktitle:tasktitle,
            discription:discription,
            singnature:singnature,
            theme:findcolor,
                  }

       const newarr=[...task, obj];
       setTask(newarr)
      
       setDate('')
       setTasktitle('')
       setDiscription('')
       setSingnature('')
    //    if(task && task.length>0){
        settolocalstorage(newarr)


    //    }
      


    }
    function taskdeleteop(obj){
        const index=task.indexOf(obj)
        let virtualarr=[];
        virtualarr=task;
        virtualarr.splice(index,1)
        setTask([...virtualarr])
        settolocalstorage(virtualarr)

    }
    // const [color,setColore]=useState()
    // useEffect(()=>{
    //     const findcolor="#" + 
    //    (Math.floor(Math.random()*(256*265*256))).toString(16)
    //    setColore(findcolor)
    //    console.log(findcolor)
    // },[task])



    
    return(
        <div className="main-container">
      <div className="leftpart">
        {


            task.map((info,index)=>
            {
                const {id,date,tasktitle,discription,singnature,theme  }=info
                return <Tasks  id={id} date={date} tasktitle={tasktitle} discription={discription} singnature={singnature} taskdelete={taskdeleteop}
                obj={info} key={index} bgcolor={theme}
                />

            })
        }
      </div>
      <div className="rightpart">
        <div className="input-field">
        <input placeholder="enter date" value={date} onChange={(tasklist)=>{
             
            setDate(tasklist.target.value)

        }}/>

        <input 
        placeholder="enter title" 
        value={tasktitle}

        
        
        onChange={(e)=>{
            setTasktitle(e.target.value)
            
        }}
        />


        <input placeholder="enter discription" value={discription} onChange={(tasklist)=>{
            setDiscription(tasklist.target.value)

        }}/>
        <input placeholder="your singnature" value={singnature} onChange={(tasklist)=>{
            setSingnature(tasklist.target.value)

        }}/>
        </div>
        <button  type="button" className="btn" onClick={addlistinarray}>add this page</button>
        
        
      </div>
      </div>
    )

})
export default Home;