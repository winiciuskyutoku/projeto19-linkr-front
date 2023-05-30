import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { TailSpin } from 'react-loader-spinner'
import styled from "styled-components";




export default function LoginPage(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //const {setUser} = useState()
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [btnClicked, setBtnClicked] = useState (false)
   

    


    function login(e){
     
       if( emailRegex.test(email)){
        e.preventDefault()
        setBtnClicked(true)
        alert("email validado com sucesso")
        /*const URL = `${process.env.REACT_APP_RENDER_URL}/login`
        const body ={email,password}
        const promise= axios.post(URL , body)
        promise.then(res=>{
            const {token , username} = res.data
            localStorage.setItem("user" , JSON.stringify({token , username}))
            const lsUser = JSON.parse(localStorage.getItem("user"))
  
         
          
        })

        promise.catch(err=>{
            alert(err.response.data.message)
            window.location.reload(true)
        })
        */ 
        navigate("/timeline")
        }else{
            alert('formato de email inválido!')
            setEmail("")
            setPassword("")
        }


    }

   return (
    <>
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
    </>
   )




}


const StyledButton = styled.button`
display:flex;
flex-direction: column;
align-items:center;
position:relative;

`