import { Link } from "react-router-dom"
import styled from "styled-components"
import SingUpPage from "../components/SingUp.component"

export default function SignUpPage() {
  return (
    <SingUpContainer>
      <SingUpPage/>
      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
