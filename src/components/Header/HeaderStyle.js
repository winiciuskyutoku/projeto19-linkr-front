import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const ContainerHeader = styled.div`
    width: 100%;
    padding: 1% 5% 1% 5%;
    background-color: #000;

    position: fixed;
    top: 0;
    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-family: 'Poppins';
        color: #fff;
        font-size: 36px;
        cursor: pointer;
    }

    span{
        width: 250px;
        height: 50px;
        padding: 0% 5% 0% 5%;
        background-color: #000;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        p{
            cursor: pointer;
            :hover{
                color: #acacac;
            }
        }
    }
`;

export const User = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
   
    img{
        width: 50px;
        height: 50px;
        background-color: #fff;
        margin-left: 10px;
        border: solid 1px rgba(255, 255, 255, 0.5);
        border-radius: 60px;
        object-fit: cover;
        cursor: pointer;
    }
`;

export const ArrowDown = styled(IoIosArrowDown)`
    width: 30px;
    height: 30px;
    color: #fff;
    cursor: pointer;
    z-index: 1;
`;
export const ArrowUp = styled(IoIosArrowUp)`
    width: 30px;
    height: 30px;
    color: #fff;
    cursor: pointer;
    z-index: 1;
`;