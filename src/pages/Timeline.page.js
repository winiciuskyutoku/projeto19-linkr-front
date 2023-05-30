import styled from "styled-components"


export default function Timeline() {
  return (
    <>
    
    <TimelineContainer>
     
        <StyledH2>timeline page</StyledH2>
      
    </TimelineContainer>

    </>
  
  )
}

const TimelineContainer = styled.section`
  height: 100vh;
  max-width:100%;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;

`

const StyledH2 = styled.h2`

margin-top:15px;
`
