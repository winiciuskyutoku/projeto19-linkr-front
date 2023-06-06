import styled from "styled-components";

export const ContainerProfile = styled.div`
    width:100%;
    background-color:#333;
    min-height: 100vh;
    max-width:100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
    }
    
    @media (max-width: 611px) {
        width:100%;
        height:100%;
    }
`;
export const ContainerMain = styled.div`
    width: 100%;
    padding: 0 10%;
    margin-top: 1%;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
`;
export const ContainerPost = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const UserPicture = styled.div`
    width: 70px;
    height: 70px;
    margin-left: 10px;
    border: solid 1px rgba(255, 255, 255, 0.5);
    border-radius: 60px;
    cursor: pointer;
    overflow: auto;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const UserName = styled.div`
    width: 100%;
    padding: 0 10%;
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const FrameNoPost = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background: #171717;
    color: #2c2c2c;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 32px;
        font-style: italic;
    }
`;