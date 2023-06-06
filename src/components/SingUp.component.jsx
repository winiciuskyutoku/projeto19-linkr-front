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
    const [confirmPwd, setConfirmPwd] = useState("")
    const [userName, setUserName] = useState("")
    const [picture, setPicture] = useState("")

    const navigate = useNavigate();
    function registerUser(e) {

        if (emailRegex.test(userEmail)) {
            if(userPassword.length < 6){
                return alert("Senha que ter no minimo 6 caracteres!")
            }

            if (userPassword === confirmPwd) {
                e.preventDefault()
                setBtnClicked(true);

                const URL = `${process.env.REACT_APP_RENDER_URL}/sign-up`

                const body = { name: userName, email: userEmail, password: userPassword, image: picture }
                try {
                    const require = axios.post(URL, body)
                    require.then(res => {
                        alert("usuário Cadastrado com sucesso!")
                        setBtnClicked(false)
                        navigate("/sign-in")

                    })
                    require.catch(err => {
                        setBtnClicked(false)
                        console.log(err.message)
                        {err.response.status.message === 409 && alert("email or username already registered/")}

                    })

                } catch (err) { 
                    console.log(err.message) 
                }

            } else { 
                
                alert("a senha e a confirmação de senha tem que ser iguais!")
            }
        } else {
            alert("formato de email invalido!")
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

                    type="password"
                    value={confirmPwd}
                    placeholder="Confirme a senha"
                    disabled={btnClicked}
                    required
                    onChange={e => setConfirmPwd(e.target.value)}
                />
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
                     data-test="sign-up-btn" 
                     disabled={btnClicked}
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
