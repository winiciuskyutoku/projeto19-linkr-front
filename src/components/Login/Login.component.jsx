import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { TailSpin } from 'react-loader-spinner'
import styled from "styled-components";
import UserContextHook from "../../hooks/UserContext.Hook.jsx";
import GuestContextHook from "../../hooks/GuestContext.Hook.jsx";
import axios  from 'axios'

import { Link } from "react-router-dom"


export default function LoginPage(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {setUser} =UserContextHook()
    const {setGuest} = GuestContextHook()
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [btnClicked, setBtnClicked] = useState (false)
   

    


    function login(e){
     
       if( emailRegex.test(email)){
        e.preventDefault()
        setBtnClicked(true)
        
        const URL = `${process.env.REACT_APP_RENDER_URL}/sign-in`
        const body ={email,password}
        console.log(body);
        const promise= axios.post(URL , body)
        promise.then(res=>{
            console.log(res.data)
           
            const {user_id , username, user_photo, user_token} = res.data
            localStorage.setItem("user" , JSON.stringify({user_id:user_id , username:username, user_photo:user_photo, user_token:user_token}))
            localStorage.setItem('user_token', user_token)
            setUser({user_id:user_id , username:username, user_photo:user_photo, user_token:user_token}) 
            navigate("/timeline")
        })

        promise.catch(err=>{
            alert(err.response.data.message)
            // window.location.reload(true)
        })
        
        }else{
            alert('formato de email inválido!')
            setEmail("")
            setPassword("")
        }


    }


const generateGuestAccess = ()=>{
    localStorage.setItem("user" , 
    JSON.stringify({
        user_id:999, 
        username:"guest", 
        user_photo:"https://cdn.onlinewebfonts.com/svg/img_83486.png", 
        user_token:"guest_token"}))

    setGuest({
        user_id:999, 
        username:"guest", 
        user_photo:"https://cdn.onlinewebfonts.com/svg/img_83486.png", 
        user_token:"guest_token"})
    


    navigate('/timeline')
}
   return (


    <LoginContainer>
    
         <Form>
        <input            
                        data-test="email" 
                        type="email" 
                        value={email}
                        placeholder="Email"
                        disabled={btnClicked}
                        required
                        onChange={e=>setEmail(e.target.value)}
         ></input>
         <input 
                        data-test="password"
                        type="password"
                        value={password}
                        placeholder="Senha"
                        disabled={btnClicked}
                        required
                        onChange={e=>setPassword(e.target.value)}
         ></input>
        <StyledButton data-test="login-btn" onClick= {(e)=>login(e)} type="submit">{
                                    btnClicked ? 
                                    (<TailSpin
                                        height="50"
                                        width="50"
                                        color="#FFFFFF"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={btnClicked}
                                />):('Log In')
                         }</StyledButton>
      </Form>

      
      <StyledButton2 to="/timeline" onClick={() => {  generateGuestAccess() }}>
                    Guest
        </StyledButton2>
     
     <Link to="/sign-up" data-test="sign-up-link">
        <StyledH2>Gostaria de criar uma conta? Cadastre-se!</StyledH2>
      </Link>

    </LoginContainer>
   )




}

const LoginContainer = styled.div `
    display:flex;
    width:30%;
    flex-direction: column;
    background-color: #333333;
    align-items:center;
    min-width:600px;

`
const StyledButton = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    position:relative;
    font-family:'Oswald';
    width: 80%;
    height: 65px;
    font-size:30px;
    align-items:center;
    justify-content:center;
    font-weight:600;
    color:white;
    background: #1877F2;
    border-radius:5px;
    &:hover{
        cursor:
        pointer;
    }

`

const StyledButton2 = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    position:relative;
    width: 80%;
    height: 65px;
    align-items: center;
    justify-content:center;
    margin-top:20px;
    margin-bottom: 20px;
    font-size:28px;
    font-family:'Oswald';
    font-weight:600;
    color:white;
    background: #1877F2;
    border-radius:5px;
    &:hover{
        cursor:
        pointer;
    }


`
const GuestButton = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    position:relative;
    margin-top:15px;
    width: 80%;
    height: 65px;
    font-size:42px;
    font-weight:bold;
    color:white;
    background: #1877F2;
    border-radius:5px;


`

const Form = styled.form`
    display: flex;
    margin-top:35px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 13px;
    input {
        width: 80%;
        height: 65px;  
        border-radius: 6px;
        box-sizing: border-box;
        padding: 10px;
        font-size: 27px;
        font-family:'Oswald'
    }
    input::placeholder{
        color: #ebebeb;
        font-size: 27px;
        font-weight: 700;
    }
`

const StyledH2 = styled.h2`
font-family:'Lato';
text-decoration:none;
color:white;
margin-top:15px;
`
