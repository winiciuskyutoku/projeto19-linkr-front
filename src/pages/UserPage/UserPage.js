import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import { StyledH2 } from "../TimelinePage/TimelineStyle";
import FramePosts from "../../components/FramePost/FramePosts";
import Hashtags from "../TimelinePage/hashtags";

import { ContainerProfile, UserName, UserPicture, ContainerMain, ContainerPost, FrameNoPost } from "./UserPageStyle";
import { LoadingCircle, LoadingThreeDots } from "../../components/Loading/Loading";

export default function UserPage() {
    const [userProfile, setUserProfile] = useState(null);
    const [likesPosts, setLikesPosts] = useState(null);
    const [reload, setReload] = useState(false);

    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const url = `${process.env.REACT_APP_RENDER_URL}/profile-user/${id}`;

        axios.get(url).then((sucess) => {
            setUserProfile(sucess.data.profile);
            setLikesPosts(sucess.data.likes);
        }).catch((error) => {
            console.log(error.response);
        });
    }, [reload, id]);

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
                        {userProfile ?
                            userProfile[0].post_id !== null ?
                            userProfile.map((p) => <FramePosts key={p.post_id} p={p} likes={likesPosts} user={user} setReload={setReload}/>)
                            :
                            <FrameNoPost>
                                <h1>Ainda não há postagens</h1>
                            </FrameNoPost>
                            :
                            <LoadingThreeDots/>
                        }
                    </ContainerPost>
                    <Hashtags />
                </ContainerMain>
            </ContainerProfile>
        </>
    );
}