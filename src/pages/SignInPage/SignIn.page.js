import styled from "styled-components"

import LoginPage from '../../components/Login/Login.component.jsx'
import BannerLogin from "../../components/Login/Banner.component.jsx"

export default function SignInPage() {
  return (
    <>
    
    <SingInContainer>
     <LoginPage/>
     <BannerLogin/>
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

