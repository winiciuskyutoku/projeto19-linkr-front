import { FramePost, NotLikedIcon, LikedIcon } from "./FramePostsStyle";
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
