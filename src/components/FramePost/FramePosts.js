import axios from "axios";
import { FramePost, NotLikedIcon, LikedIcon, LikeImagePost, DataPost } from "./FramePostsStyle";
import { useEffect, useState } from "react";

export default function FramePosts({ p, likes, user }) {
    const { user_photo, username, post_comment, post_link, post_id } = p;
    const [liked, setLiked] = useState(null);
    const [likesAmount, setLikesAmount] = useState(0);
    const config = user.user_token && { headers: { Authorization: `Bearer ${user.user_token}` } };

    useEffect(() => {
        likes.map((l, i) => {
            if (l.post_id === post_id) {
                setLikesAmount(i + 1);
                if (l.user_liked === user.user_id) {
                    return setLiked(true);
                }
            }
        })

    }, []);

    function like() {
        const url = `${process.env.REACT_APP_RENDER_URL}/like-post/${post_id}`;

        axios.post(url, {}, config).then((sucess) => {
            setLiked(!liked);
            (liked ? setLikesAmount(likesAmount - 1) : setLikesAmount(likesAmount + 1))
            // console.log(sucess);
            // Variável de estado para atualizar o userPage (userPage deve pegar todas)
        }).catch((error) => {
            console.log(error.response);
        })
    }

    return (
        <FramePost>
            <LikeImagePost>
                <img src={user_photo} alt="" />
                {liked ? <LikedIcon onClick={like} /> : <NotLikedIcon onClick={like} />}
                <p>{likesAmount}</p>
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
