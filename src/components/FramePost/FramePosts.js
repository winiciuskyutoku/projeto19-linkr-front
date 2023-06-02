import { FramePost, NotLikedIcon, LikedIcon } from "./FramePostsStyle";
import UserContextHook from "../../hooks/UserContext.Hook";

export default function FramePosts({ p }) {
    const {user_photo, username, post_comment, post_link} = p;
    const { user_token } = UserContextHook();
    const config = user_token && { headers: { Authorization: `Bearer ${user_token}` } };


    function like(){
        
        console.log(user_token);
    }

    return (
        <FramePost>
            <div>
                <img src={user_photo} alt="" />
                <NotLikedIcon onClick={like}/>
            </div>
            <span>
                <h1>{username}</h1>
                <h2>{post_comment}</h2>
                <h2>{post_link}</h2>
            </span>
        </FramePost>
    );
}
