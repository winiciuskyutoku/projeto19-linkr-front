import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

export default function FramePosts({ p }) {
    return (
        <FramePost>
            <div>
                <img src={p.user_photo} alt="" />
                <NotLikedIcon />
            </div>
            <span>
                <h1>{p.username}</h1>
                <h2>{p.post_comment}</h2>
                <h2>{p.post_link}</h2>
            </span>
        </FramePost>
    );
}
const FramePost = styled.div`
    width: 100%;
    height: 300px;
    padding: 2%;
    border-radius: 10px;
    margin-bottom: 5%;
    background: #171717;
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
            color: #fff;
            font-weight: 500;
            font-size: 18px;
        }
        h2{
            color: #fff;
            font-weight: 200;
            font-size: 14px;
        }

    }
`;

const NotLikedIcon = styled(AiOutlineHeart)`
    width: 60%;
    height: 25%;
    color: #fff;
    cursor: pointer;
    :hover{
        color: red;
    }
`;