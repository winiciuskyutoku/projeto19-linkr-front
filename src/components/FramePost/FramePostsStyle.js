import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const FramePost = styled.div`
    width: 100%;
    height: 300px;
    padding: 2%;
    border-radius: 10px;
    margin-bottom: 5%;
    background: #171717;
    position: relative;
`;

export const NotLikedIcon = styled(AiOutlineHeart)`
    width: 40%;
    height: 25%;
    color: #fff;
    cursor: pointer;
    :hover{
        color: red;
    }
`;

export const LikedIcon = styled(AiFillHeart)`
    width: 40%;
    height: 25%;
    color: red;
    cursor: pointer;
    :hover{
        color: white;
    }
`;
export const TooltipText = styled.p`
    cursor: pointer;
    color: #fff;
    :hover{
        color: #4D4D4D;
    }
`;
export const TooltipBox = styled.div`
    width: 250%;
    position: absolute;
    top: calc(50% + 20px);
    background-color: white;
    border-radius: 4px;
    visibility: hidden;
    transition: visibility 0.2s, color 0.5s, background-color 0.5s, width 0.5s, padding 0.5s ease-in-out;
    
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #000;
    }
`;
export const LikeImagePost = styled.div`
    width: 10%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    position: relative;
    
    img{
        width: 75%;
        height: 20%;
        object-fit: cover;
        border: solid 1px rgba(255, 255, 255, 0.5);
        border-radius: 60px;
        overflow: auto;     
    }
    p{
        cursor: pointer;
        color: #fff;
        :hover{
            color: #4D4D4D;
        }
    }
    p:hover + ${TooltipBox} {
        visibility: visible;
        color: #000;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10%;
    }
`;

export const DataPost = styled.div`
    width: 90%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1{
        font-weight: 400;
        font-size: 19px;
        color: #FFFFFF;
    }
    h2{
        font-weight: 200;
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
`;
