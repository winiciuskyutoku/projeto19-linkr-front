import { Link } from "react-router-dom"
import SingUpPage from "../../components/SingUp.component.jsx"
import { SignUpContainer, MainContainer, BannerContainer } from "./style.js"


export default function SignUp() {
  return (
    <MainContainer>
      <BannerContainer>
        <h1>linkr</h1>
        <p>save, share and discover
          the best links on the web</p>
      </BannerContainer>
      <SignUpContainer>
        <SingUpPage />
        <Link to="/"  data-test="login-link" >
          Já tem uma conta? Entre agora!
        </Link>
      </SignUpContainer>
    </MainContainer>
  )
}