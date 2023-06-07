import { UserName, UserPicture, FollowButton } from "./UserPageStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingThreeDots } from "../../components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";

export default function User({ profile, user }) {
    const [following, setFollowing] = useState(null);
    const [loadFollow, setLoadFollow] = useState(null)
    const [reloadState, setReloadState] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();
    const config = user.user_token && { headers: { Authorization: `Bearer ${user.user_token}` } };

    useEffect(() => {
        if(user.user_token==='guest_token'){
            setFollowing(false);
            setLoadFollow(true);
            return;
        };
        const url = `${process.env.REACT_APP_RENDER_URL}/follower/${id}`;

        axios.get(url, config).then((sucess) => {
            setFollowing(sucess.data);
            setLoadFollow(sucess.data)
        }).catch((error) => {
            console.log(error.response.data);
        })
    }, [reloadState]);

    function follow() {
        if(user.user_token==='guest_token'){
            navigate("/sign-up");
        };
        setLoadFollow(null);
        const url = `${process.env.REACT_APP_RENDER_URL}/follow/${id}`;

        axios.post(url, {}, config).then((sucess) => {
            setReloadState(!reloadState);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <UserName>
            <UserPicture>
                <img src={profile.user_photo} alt="" />
                <p>{`${profile.username}'s posts`}</p>
            </UserPicture>
            {(id!=user.user_id) && (loadFollow === null ?
                <FollowButton state={following}><LoadingThreeDots /> </FollowButton>
                :
                <FollowButton onClick={follow} state={following}>
                    {following ? 'Seguindo' : 'Seguir'}
                </FollowButton>)
            }
        </UserName>
    );
}