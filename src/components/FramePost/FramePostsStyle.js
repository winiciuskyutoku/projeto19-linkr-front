import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const FramePost = styled.div`
    width: 100%;
    height: 300px;
    padding: 2%;
    border-radius: 10px;
    margin-bottom: 5%;
    background: #171717;
    color: #fff;

    div{
        width: 10%;
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    
        img{
            width: 90%;
            height: 60%;
            object-fit: cover;
            border: solid 1px rgba(255, 255, 255, 0.5);
            border-radius: 60px;
            cursor: pointer;
            overflow: auto;
            
        }
    }
    span{
        width: 90%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1{
            font-weight: 500;
            font-size: 18px;
        }
        h2{
            font-weight: 200;
            font-size: 14px;
        }

    }
`;

export const NotLikedIcon = styled(AiOutlineHeart)`
    width: 60%;
    height: 25%;
    color: #fff;
    cursor: pointer;
    :hover{
        color: red;
    }
`;

export const LikedIcon = styled(AiFillHeart)`
    width: 60%;
    height: 25%;
    color: #fff;
    cursor: pointer;
    :hover{
        color: red;
    }
`;