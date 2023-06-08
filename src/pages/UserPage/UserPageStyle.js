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
    margin-top: 3%;
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img{
        width: 70px;
        height: 70px;
        border: solid 1px rgba(255, 255, 255, 0.5);
        border-radius: 60px;
        cursor: pointer;
        object-fit: cover;
    }
    p{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        color: #FFFFFF;
        margin-left: 2%;

        @media (max-width:611px) {
            font-size: 33px;
            line-height: 49px;
            margin-left:17px;
        }
    }
`;
export const UserName = styled.div`
    width: 100%;
    padding: 0 10%;
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
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
export const LoadingContainer = styled.div`
    width: 100%;
    padding: 0 10%;
    margin-top: 40%;
    display: flex;
    justify-content: center;
`;
export const FollowButton = styled.button`
    width: 10%;
    height: 25px;
    margin-left: 5%;
    background-color: ${({state}) => state ? "#f1f8ff" : "#0000fa"};
    font-family: 'Roboto', sans-serif;
    color: ${({state}) => state ? "#001a18" : "#f1f8ff"};
    font-weight: 400;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    border: none;
    :hover{
        color: ${({state}) => state ? "#f1f8ff" : "#001a18"};;
        background-color: ${({state}) => state ? "#0000fa" : "#f1f8ff"};
    }
    
`;