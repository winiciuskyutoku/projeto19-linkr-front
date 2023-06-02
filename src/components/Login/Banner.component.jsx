import styled from "styled-components";

export default function BannerLogin(){
       return (


            <LoginContainer>
                    <StyledH2>linkr</StyledH2>
            </LoginContainer>
   )




}

const LoginContainer = styled.div `
    margin-top:5px;
    display:flex;
    min-width:80%;
    flex-direction: column;
    background-color: black;
    align-items:center;

`

const StyledH2 = styled.h2`
font-family:'Puppets';
color:white;
margin-top:15px;
`
