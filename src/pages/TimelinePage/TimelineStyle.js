import styled from "styled-components"

export const TimelineContainer = styled.section`
  margin-top:72px;
  background-color:#333;
  height: 100vh;
  max-width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const StyledH2 = styled.h2`
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: #FFFFFF;
margin-left:5px;
`
export const TitleContainer = styled.div`
margin-top:78px;
width:611px;
`
export const PublishContainer = styled.form`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
width:611px;
height:210px;
margin: 43px auto 29px auto;
display:flex;
flex-direction:column;
padding:21px 22px 16px 87px;
box-sizing:border-box;
input::placeholder{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: #949494;
  text-align:left;
  vertical-align:top;
}
`
export const PublishTitle = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
color: #707070;

`
export const LinkInput = styled.input`
height:30px;
background: #EFEFEF;
border-radius: 5px;
margin-top:5px;
border: none;
`
export const CommentInput = styled.input`
height:66px;
background: #EFEFEF;
border-radius: 5px;
margin-top:5px;
border:none;
`
export const PublishButton = styled.button`
width: 112px;
height: 31px;
background: #1877F2;
border-radius: 5px;
margin-left:390px;
margin-top:5px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
`