import styled from "styled-components"

const Header = () => {
  return (
    <MshobDiv>
        <Headhone>TODO</Headhone>
    </MshobDiv>
  )
}

export default Header

const Headhone = styled.h1`
    color: #007FDB;
    font-family: Inter;
    font-size: 76px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const MshobDiv = styled.div `
    display: grid;
    place-items: center;
    @media (width>1440px){
      margin-top: 20px;
    }
`