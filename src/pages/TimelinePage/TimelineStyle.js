import styled from "styled-components"

export const TimelineContainer = styled.section`
  margin-top:72px;
  background-color:#333;
  height: 100vh;
  max-width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
@media (max-width: 611px) {
  width:100%;
  height:100vh;
}
`

export const StyledH2 = styled.h2`
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: #FFFFFF;
margin-left:17px;

@media (max-width:611px) {
  font-size: 33px;
  line-height: 49px;
  margin-left:17px;
}
`
export const TitleContainer = styled.div`
margin-top:78px;
width:937px;
@media (max-width: 937px) {
  width:611px;
}
@media (max-width: 611px) {
  width:100%;
}
`
export const ContainerContent = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width: 937px;
margin: 43px auto 29px auto;
@media (max-width:937px) {
  width:100%;
  align-items:center;
}
`
export const PublishContainer = styled.form`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
width:611px;
height:210px;
display:flex;
flex-direction:column;
padding:21px 22px 16px 87px;
box-sizing:border-box;
position:relative;
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
@media (max-width: 611px) {
  width:100%;
  border-radius:0;
  align-items:center;
  height:164px;
  padding: 10px 15px 40px 15px;
  img{
    display:none;
  }
}
`
export const PublishTitle = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
color: #707070;
@media (max-width:611px) {
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #707070;
}
`
export const LinkInput = styled.input`
height:30px;
background: #EFEFEF;
border-radius: 5px;
margin-top:5px;
border: none;
@media (max-width:611px) {
  width:100%
}
`
export const CommentInput = styled.input`
height:66px;
background: #EFEFEF;
border-radius: 5px;
margin-top:5px;
border:none;
@media (max-width:611px) {
  width:100%;
  height:47px;
}
`
export const PublishButton = styled.button`
width: 112px;
height: 31px;
background: #1877F2;
border-radius: 5px;
position:absolute;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
`

export const Post = styled.button`
  width: 611px;
  height: 276px;
  border-radius: 16px;
  background-color: #171717;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  box-sizing: border-box;
  margin-bottom: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 26px;
  }
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 87%;
  gap: 8px;
  h1{
    font-size: 19px;
    font-weight: 400;
    color: #FFFFFF;
  }
  h2{
    font-size: 17px;
    color: #B7B7B7;
  }
  div{
    border: 1px solid #4D4D4D;
    display: flex;
    border-radius: 11px;
    height: 155px; 
    box-sizing: border-box;
    img {
      height: 100%;
      width: 155px;
      border-radius: 0px 11px 11px 0px;
    }
    div{
      display: flex;
      flex-direction: column;
      border: none;
      justify-content: center;
      padding: 20px;
      box-sizing: border-box;
      gap: 5px;
      h2{
        color: #cecece;
        font-size: 16px;
        font-weight: 400;
        overflow: hidden;
      }
      p {
        color: #9B9595;
        font-size: 11px;
        text-overflow: ellipsis;
      }
      a{
        font-size: 11px;
        color: #cecece;
      }
    }
  }
`

export const Loading = styled.div`
    color: white;
    font-size: 25px;
    width: 611px;
    display: flex;
    justify-content: center;
`

/* @media (max-width: 611px) {
  bottom:12px;
  right:15px;
} */

export const ContainerHashtags = styled.div`
background: #171717;
border-radius: 16px;
width:301px;
position: fixed;
top:232px;
right:5%;
box-sizing:border-box;
padding-bottom: 30px;
display:flex;
flex-direction:column;
a{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin-left:16px;
  text-decoration:none;
}
@media (max-width: 1000px) {
  display:flex;
  right:5px;
}
@media (max-width: 937px) {
  display:${props=>props.displayDiv?'flex':'none'};
  z-index:100;
  top:100px;
}
`
export const BackHashtag = styled.div`
position:fixed;
top:72px;
right:0;
width:320px;
height:100%;
z-index:1;
@media (max-width: 937px) {
  background-color:black;
  opacity:0.95;
  display:${props=>props.displayDiv?'flex':'none'};
}
`

export const HashtagTitle = styled.div`
width:100%;
height:60px;
padding-left:16px;
box-sizing:border-box;
border-bottom: 1px #fff solid; 
display:flex;
align-items: center;  
margin-bottom:22px;
h2{
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #FFFFFF;
}
`