import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import { StyledH2 } from "../TimelinePage/TimelineStyle";
import FramePosts from "../../components/FramePost/FramePosts";
import Hashtags from "../TimelinePage/hashtags";

import { ContainerProfile, UserName, UserPicture, ContainerMain, ContainerPost, FrameNoPost } from "./UserPageStyle";

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
                            userProfile.length > 1 ?
                            userProfile.map((p) => <FramePosts key={p.post_id} p={p} />)
                            :
                            <FrameNoPost>
                                <h1>Ainda não há postagens</h1>
                            </FrameNoPost>
                        }
                    </ContainerPost>
                    <Hashtags />
                </ContainerMain>
            </ContainerProfile>
        </>
    );
}