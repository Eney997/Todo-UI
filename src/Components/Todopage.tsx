import styled from "styled-components"
import carieliwre from '../public/sayYes.svg'
import robotpic from '../public/robotPick.jpg'
import secpick from '../public/secPick.jpg'
import { useState } from "react"
import nagavi from '../public/garbageBox.svg'
import empty from '../public/carieliWre.svg'

const Todopage = () => {
    const [todoList,setTodoList] = useState([])
    const [newTask,setNewTask] = useState('')

    const hanleChange:any = (e:any) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        const newTodoList:any = [...todoList,newTask]
        setTodoList(newTodoList)
    }

  return (
    <Tododiv>
        <Imgdiv id="imgdive">
        <Inpich1>Thur 9</Inpich1>
        <Inpickh2>6:23 AM</Inpickh2>
        </Imgdiv>
        <InpandButtDiv>
        <Inputtypetex onChange={hanleChange} id="typeTxt" type="text" placeholder="Note" maxLength={20}></Inputtypetex>
        <Sbutton onClick={addTask}><Butspan>+</Butspan></Sbutton>
        </InpandButtDiv>
        <div className="list">
            {todoList.map((task:any,index:any) => {
                const unicKey = `${task.id}-${index}-`
            return <Listdiv key={unicKey}>
                        <ZedaorisDiv>
                        <Listdivone className="listIN" key={index}>{task}</Listdivone>
                        <Ldivsec>Today at 8:00 PM</Ldivsec>
                        </ZedaorisDiv>
                        <IsorifotoDiv>
                        <EmptIMG src={empty}></EmptIMG>
                        <Grb src={nagavi}></Grb>
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
    background-color: #fff;
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
const Inpich1 = styled.h1`
    color: #FFF;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 320px;
    margin-top: 144px;
    position: absolute;

    @media (width>1440px){
        font-size: 15px;
        margin-left: 534px;
        margin-top:180px ;
    }
`
const Inpickh2 = styled.h2 `
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;
    margin-top: 161px;
    margin-left: 287px;

    @media (width>1440px){
        font-size: 25px;
        margin-left: 480px;
        margin-top: 200px;
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

@media (width>1440px){
    width: 420px;
    text-align:bottom 0px;padding-left:55px;
}
`
const Sbutton = styled.button `
    display: flex;
    width: 55px;
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
`

const IsorifotoDiv = styled.div`
    grid-area:two;
`
const EmptIMG = styled.img `
    cursor: pointer;
    margin-left: 10px;
`
const Grb = styled.img `
    cursor: pointer;
    margin-left: 5px;
`
const Ldivsec = styled.h2`
    color: #888;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 25px;
    margin-bottom: 20px;

@media (width>1440px){
    margin-left: 100px;
    }
`