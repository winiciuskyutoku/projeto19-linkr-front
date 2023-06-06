import styled from "styled-components";

export default function BannerLogin(){
       return (


            <LoginContainer>
                    <StyledH2>linkr</StyledH2>
                    
                    <div>
                            <p>save, share and discover the best links on the web</p>
                    </div>
            </LoginContainer>
   )




}

const LoginContainer = styled.div `
  
    display:flex;
    min-width:70%;
    flex-direction: column;
    background-color: #151515;
    align-items:center;
    justify-content: center;
    div{
        width:35%;
        
    }

    p{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;

    }

color: #FFFFFF;


`

const StyledH2 = styled.h2`
  font-family: 'Passion One';
    font-style: normal;
    font-weight: 700;
    font-size: 106px;
  
    position:relative;
    right:126px;
    line-height: 117px;
    letter-spacing: 0.05em;
color:white;
margin-top:15px;
`
