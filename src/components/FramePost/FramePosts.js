import axios from "axios";
import { FramePost, NotLikedIcon, LikedIcon, LikeImagePost, DataPost, TooltipText, TooltipBox } from "./FramePostsStyle";
import { useEffect, useState } from "react";
import { FancyModalButton } from "../../pages/UserPage/UserPage";

export default function FramePosts({ p, likes, user, setReload, postId, userId, deletePost }) {
    const { user_photo, username, post_comment, post_link, post_id } = p;
    const [liked, setLiked] = useState(null);
    const [likesAmount, setLikesAmount] = useState(0);
    const [namesLiked, setNamesLiked] = useState();
    const config = user.user_token && { headers: { Authorization: `Bearer ${user.user_token}` } };

    useEffect(() => {
        const names = [];
        likes.map((l, i) => {
            if (l.post_id === post_id) {
                setLikesAmount(i + 1);
                if (l.user_liked === user.user_id) {
                    names.unshift('Você');
                    return setLiked(true);
                }
                names.push(l.username_liked);
            }
        });
        if (names.length > 2) {
            setNamesLiked(names.slice(0, 2).join(', ') + ` e outras ${names.length - 2} pessoas`);
        } else {
            setNamesLiked(names.slice(0, 2).join(' e '));
        }
    }, [likes]);

    function like() {
        const url = `${process.env.REACT_APP_RENDER_URL}/like-post/${post_id}`;

        axios.post(url, {}, config).then((sucess) => {
            setReload(likes.length);
            setLiked(!liked);
            (liked ? setLikesAmount(likesAmount - 1) : setLikesAmount(likesAmount + 1))
        }).catch((error) => {
            console.log(error.response);
        })
    }

    return (
        <FramePost data-test="post">
            <FancyModalButton userId={userId} postId={postId} deletePost={deletePost}></FancyModalButton>
            <LikeImagePost>
                <img src={user_photo} alt="" />
                {liked ? <LikedIcon onClick={like} /> : <NotLikedIcon onClick={like} />}
                <p>{likesAmount}</p>
                {namesLiked && <TooltipBox><h1>{namesLiked}</h1></TooltipBox>}
            </LikeImagePost>
            <DataPost>
                <h1>{username}</h1>
                <h2>{post_comment}</h2>
                
                <div>
                    <div>
                        <h2>{p.title.slice(0, 150)}{p.title.length > 150 && '...'}</h2>
                        <p>{p.description.slice(0, 150)}{p.description.length > 150 && '...'}</p>
                        <a href={p.url} target="_blank">{p.url.slice(0, 100)}{p.url.length > 100 && '...'}</a>
                    </div>
                    <img src={p.image}></img>
                </div>
            </DataPost>
            
        </FramePost>
    );
}