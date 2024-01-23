import styled from "styled-components"

const Todopage = () => {
  return (
    <Tododiv>
        <Imgdiv id="imgdive">
        <Inpich1>Thur 9</Inpich1>
        <Inpickh2>6:23 AM</Inpickh2>
        </Imgdiv>
        <Inputtypetex id="typeTxt" type="text" placeholder="Note" maxLength={30}/>
        <Sbutton><Butspan>+</Butspan></Sbutton>
    </Tododiv>
  )
}

export default Todopage

const Tododiv = styled.div `
    width: 100%;
    height: 700px;
    background-color: #fff;
    border-radius:10px;
    @media (width>1440px){
        margin-top:20px ;
    }
`
const Imgdiv = styled.div`
    background-image: url(/src/public/robotPick.jpg.jpg);
    background-repeat: no-repeat;
    width: 360px;
    height: 200px;
    border-radius: 10px;

    @media (width>1440px){
        background-image: url(/src/public/secPick.jpg.jpg);
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
    width: 250px;
    height: 40px;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    background: #EEE;
    border-radius: 5px;
    outline: none;
    border: none;
    margin-left: 15px;
    margin-top: 23px;
    background-image: url(/src/public/justCyrcle.svg.svg);
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: 4%;
    margin-bottom: 200px;
    text-align:bottom 0px;padding-left:45px;
    position: absolute;
    ::placeholder {
    width: 38px;
    color: #888;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
@media (width>1440px){
    width: 420px;
    margin-left: 40px;
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
    margin-left: 280px;
    margin-top: 25px;
    border-radius: 5px;
    background: #20EEB0;
    border: none;
    outline: none;
    cursor: pointer;
    @media (width>1440px){
        margin-left: 490px;
        height: 40px;
        margin-top: 23px;
    }
`
const Butspan = styled.span `
    font-size: 15px;
    color: #FFF;
`
