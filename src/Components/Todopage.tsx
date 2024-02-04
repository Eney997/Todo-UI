import styled from "styled-components"
import carieliwre from '../public/sayYes.svg'
import robotpic from '../public/robotPick.jpg'
import secpick from '../public/secPick.jpg'
import { useState } from "react"
import nagavi from '../public/garbageBox.svg'


const Todopage = () => {
    const [todoList,setTodoList] = useState([])
    const [newTask,setNewTask] = useState('')

    const hanleChange:any = (e:any) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask === "") {
        console.error("Task cannot be empty");
        return;
        }
        const newTodoList:any = [...todoList,newTask]
        setTodoList(newTodoList)
    }

    const deleteTask = (taskName:any) => {
        setTodoList(todoList.filter((task) => task !== taskName))
    }

    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
          addTask();
        }
      }

  return (
    <Tododiv>
        <Imgdiv id="imgdive">
        </Imgdiv>
        <InpandButtDiv>
        <Inputtypetex onKeyPress={handleKeyPress} onChange={hanleChange} id="typeTxt" type="text" placeholder="Enter Your Todo" maxLength={11}></Inputtypetex>
        <Sbutton onClick={addTask}><Butspan>+</Butspan></Sbutton>
        </InpandButtDiv>
        <div className="list">
            {todoList.map((task:any,index:any) => {
                const unicKey = `${task.id}-${index}-`
            return <Listdiv key={unicKey}>
                        <ZedaorisDiv>
                        <Listdivone className="listIN" key={index}>{task}</Listdivone>
                        </ZedaorisDiv>
                        <IsorifotoDiv>
                        <Grb onClick={() => deleteTask(task)} src={nagavi}></Grb>
                        </IsorifotoDiv>
                   </Listdiv>
            })}
        </div>
    </Tododiv>
  )
}

export default Todopage

const Tododiv = styled.div `
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius:10px;
    margin-bottom: 100px;

    @media (width>1440px){
        margin-top:20px ;
    }
`
const Imgdiv = styled.div`
    background-image: url(${robotpic});
    background-repeat: no-repeat;
    width: 360px;
    height: 200px;
    border-radius: 10px;

    @media (width>1440px){
        background-image: url(${secpick});
        background-repeat: no-repeat;
        width: 600px;
        height: 250px;
        border-radius: 10px;
    }
`
const Inputtypetex = styled.input `
    display: flex;
    width: 100px;
    height: 40px;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    background: black;
    border-radius: 5px;
    outline: none;
    border: none;
    background-image: url(${carieliwre});
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: 4%;
    text-align:bottom 0px;padding-left:45px;
    color: #888;
    margin-bottom: 30px;

@media (width>1440px){
    width: 420px;
    text-align:bottom 0px;padding-left:55px;
}
`
const Sbutton = styled.button `
    display: flex;
    width: 55px;
    height: 40px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 11px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 5px;
    background: #20EEB0;
    border: none;
    outline: none;
    cursor: pointer;

    @media (width>1440px){
        height: 40px;
    }
`
const Butspan = styled.span `
    font-size: 15px;
    color: #FFF;
    margin-top: -5px;

    @media (width>1440px){
        font-size: 25px;
        
    }
`
const InpandButtDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 20px;
    gap: 10px;
`
const Listdiv = styled.div `
    display: grid;
    grid-template-areas:'one two';
`
const Listdivone = styled.h1 `
    color: #000000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 25px;
    @media (width>1440px){
    margin-left: 100px;
    }
`
const ZedaorisDiv = styled.div`
    grid-area:one;
    margin-left: 40px;
`

const IsorifotoDiv = styled.div`
    grid-area:two;
`

const Grb = styled.img `
    cursor: pointer;
    margin-left: 5px;
`