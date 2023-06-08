import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { TailSpin } from 'react-loader-spinner'
import { useState } from 'react'
import styled from 'styled-components'


export default function SingUpPage() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [btnClicked, setBtnClicked] = useState(false)
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [picture, setPicture] = useState("")
    const [emailRegistered, setEmailRegistered] = useState(false);
    const navigate = useNavigate();


    function registerUser(e) {
        e.preventDefault()
        console.log(emailRegex.test(userEmail))
        if (userPassword.length < 6 || !emailRegex.test(userEmail)) {
            if(!emailRegex.test(userEmail)){
                alert("email em formato invalido!")
            } 
            if ( userPassword.length < 6 ){
                alert("Senha que ter no minimo 6 caracteres!")
            }
         
            setUserPassword("")
            setUserName("")
            setPicture("")
            setUserEmail("")
            setBtnClicked(false);

        } else {

            try {

                const URL = `${process.env.REACT_APP_RENDER_URL}/sign-up/${userEmail}`
                const promise = axios.get(URL)
                
                promise.then(response => {
                    console.log ('response',response.data)
                    
                    if (response.data?.user_email  === userEmail){
                        alert("email already registered!")
                        setUserPassword("")
                        setUserName("")
                        setPicture("")
                        setUserEmail("")
                        setBtnClicked(false);
                        window.location.reload(true)
                    } else {
                        try {
                            setBtnClicked(true);
                        
        
                            const URL = `${process.env.REACT_APP_RENDER_URL}/sign-up`
                            const body = { name: userName, email: userEmail, password: userPassword, image: picture }
                            const promise = axios.post(URL, body)

                            promise.then(() => {
                                alert("usuário Cadastrado com sucesso!")
                                navigate('/')
        
                            })
                            promise.catch(err => {
                                if (err.response.status === 409) {
                                    setBtnClicked(false)
                                    alert("email already registered!")
                                }
        
                            })
                      }  catch(err) {
                        console.log (err)
                     }
                    }
                })
            }catch(err) {
                console.log (err)
            }
            
                
          
        }
        
    }
 

    return (
        <>

            <Form>
                <input
                    data-test="username"
                    type="text"
                    value={userName}
                    placeholder="username"
                    disabled={btnClicked}
                    required
                    onChange={e => setUserName(e.target.value)}
                ></input>
                <input
                    data-test="email"
                    type="email"
                    value={userEmail}
                    placeholder="Email"
                    disabled={btnClicked}
                    required
                    onChange={e => setUserEmail(e.target.value)}
                ></input>
                <input
                    data-test="password"
                    type="password"
                    value={userPassword}
                    placeholder="Senha"
                    disabled={btnClicked}
                    required
                    onChange={e => setUserPassword(e.target.value)}
                ></input>
                <input
                    data-test="picture-url"
                    type="url"
                    value={picture}
                    placeholder="Url da foto"
                    disabled={btnClicked}
                    required
                    onChange={e => setPicture(e.target.value)}
                />
                <StyledButton
                    disabled={btnClicked}
                    data-test="sign-up-btn"
                    onClick={(e) => registerUser(e)}
                    type="submit" > {
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
                            />) : ('Cadastrar')
                    }
                </StyledButton>

            </Form>
        </>
    )
}


const StyledButton = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 80%;
    height: 65px;
    box-sizing: border-box;
    border-radius: 6px;

    color: #FFFFFF;
    font-size: 27px;
    font-weight: 700;
    background-color: #1877F2;
`

const Form = styled.form`
    display: flex;
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
    }
    input::placeholder{
        color: #9F9F9F;
        font-size: 27px;
        font-weight: 700;
    }
`
