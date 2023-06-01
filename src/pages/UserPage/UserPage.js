import { useParams } from "react-router-dom";
import { StyledH2 } from "../TimelinePage/TimelineStyle";
import Hashtags from "../TimelinePage/hashtags";
import Header from "../../components/Header/Header";
import FramePosts from "../../components/FramePost/FramePosts";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function UserPage() {
    const [userProfile, setUserProfile] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const url = `${process.env.REACT_APP_RENDER_URL}/profile-user/${id}`;

        axios.get(url).then((sucess) => {
            console.log(sucess.data);
            setUserProfile(sucess.data);
        }).catch((error) => {
            console.log(error.response);
        });
    }, [id]);

    return (
        <>
            <Header />
            <ContainerProfile>
                <UserName>
                    <UserPicture>
                        {userProfile ? <img src={userProfile[0].user_photo} alt="" /> : ''}
                    </UserPicture>
                    <StyledH2>{userProfile ? `${userProfile[0].username}'s posts` : ''}</StyledH2>
                </UserName>
                <ContainerMain>
                    <ContainerPost>
                        {userProfile &&
                            userProfile.length > 1 &&
                            userProfile.map((p) => <FramePosts key={p.post_id} p={p} />)
                        }
                    </ContainerPost>
                    <Hashtags />
                </ContainerMain>
            </ContainerProfile>
        </>
    );
}
const ContainerProfile = styled.div`
    width:100%;
    height: 100vh;
    background-color:#333;
    
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
const ContainerMain = styled.div`
    width: 100%;
    padding: 0 10%;
    margin-top: 1%;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
`;
const ContainerPost = styled.div`
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
const UserName = styled.div`
    width: 100%;
    padding: 0 10%;
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;