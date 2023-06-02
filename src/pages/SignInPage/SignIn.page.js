import styled from "styled-components"

import LoginPage from '../../components/Login/Login.component.jsx'

export default function SignInPage() {
  return (
    <>
    
    <SingInContainer>
     <LoginPage/>
     
    </SingInContainer>

    </>
  
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  max-width:100%;
  display: flex;
  background-color:black;
  flex-direction: row;
  //justify-content: center;
  //align-items: center;


`

const StyledH2 = styled.h2`

margin-top:15px;
`
