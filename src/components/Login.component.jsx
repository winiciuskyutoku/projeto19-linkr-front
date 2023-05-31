import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { TailSpin } from 'react-loader-spinner'
import styled from "styled-components";
import UserContextHook from "../hooks/CitiesContext.Hook";
import axios  from 'axios'


export default function LoginPage(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {setUser} = UserContextHook()
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [btnClicked, setBtnClicked] = useState (false)
   

    


    function login(e){
     
       if( emailRegex.test(email)){
        e.preventDefault()
        setBtnClicked(true)
        alert("email validado com sucesso")
        const URL = `${process.env.REACT_APP_RENDER_URL}/sign-in`
        const body ={email,password}
        const promise= axios.post(URL , body)
        promise.then(res=>{

            setUser([...res.data])
            const {user_id , username, user_photo} = res.data
           // localStorage.setItem("user" , JSON.stringify({user_id , username, user_photo}))
            ///const lsUser = JSON.parse(localStorage.getItem("user"))
            navigate("/timeline")
        })

        promise.catch(err=>{
            alert(err.response.data.message)
            window.location.reload(true)
        })
        
        }else{
            alert('formato de email inválido!')
            setEmail("")
            setPassword("")
        }


    }

   return (


    <LoginContainer>
         <form>
         <input 
                        type="email" 
                        value={email}
                        placeholder="Email"
                        disabled={btnClicked}
                        required
                        onChange={e=>setEmail(e.target.value)}
         ></input>
         <input 
                       
                        type="password"
                        value={password}
                        placeholder="Senha"
                        disabled={btnClicked}
                        required
                        onChange={e=>setPassword(e.target.value)}
         ></input>
        <StyledButton onClick= {(e)=>login(e)} type="submit">{
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
                                />):('Entrar')
                         }</StyledButton>
      </form>
    </LoginContainer>
   )




}

const LoginContainer = styled.div `
    display:flex;
    flex-direction: column;
    background-color: #e5e5e5;

`
const StyledButton = styled.button`
display:flex;
flex-direction: column;
align-items:center;
position:relative;

`