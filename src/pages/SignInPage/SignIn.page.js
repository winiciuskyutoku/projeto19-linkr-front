import styled from "styled-components"
import { Link } from "react-router-dom"
<<<<<<< HEAD
import LoginPage from '../../components/Login/Login.component.jsx'
=======
<<<<<<<< HEAD:src/pages/SignIn.page.js
import LoginPage from '../components/Login/Login.component.jsx'
========
import LoginPage from '../../components/Login.component.jsx'
>>>>>>>> main:src/pages/SignInPage/SignIn.page.js
>>>>>>> main
export default function SignInPage() {
  return (
    <>
    
    <SingInContainer>
<<<<<<< HEAD
     <LoginPage />
=======
     <LoginPage/>
>>>>>>> main
      <Link to="/singup">
        <StyledH2>Primeira vez? Cadastre-se!</StyledH2>
      </Link>
    </SingInContainer>

    </>
  
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  max-width:100%;
  display: flex;
<<<<<<< HEAD
  flex-direction: column;
  //justify-content: center;
  align-items: center;
=======
  background-color:black;
  flex-direction: row;
  //justify-content: center;
  //align-items: center;
>>>>>>> main

`

const StyledH2 = styled.h2`

margin-top:15px;
`
