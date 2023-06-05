import { useEffect, useState } from "react";
import { BackHashtag, ContainerHashtags, HashtagTitle } from "./TimelineStyle";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Hashtags({ displayDiv, att }) {
    const [hashtags, setHashtags] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_RENDER_URL}/hashtags`)
            .then((res) => {
                console.log(res.data)
                setHashtags(res.data)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }, [att])

    if (!hashtags || hashtags.length === 0) {
        return (
            <BackHashtag displayDiv={displayDiv}>
                <ContainerHashtags displayDiv={displayDiv} >
                    <HashtagTitle>
                        <h2>trending</h2>
                    </HashtagTitle>
                </ContainerHashtags>
            </BackHashtag >
        )
    }
    return (
        <BackHashtag displayDiv={displayDiv}>
            <ContainerHashtags displayDiv={displayDiv}>
                <HashtagTitle>
                    <h2>trending</h2>
                </HashtagTitle>
                {hashtags.map((h) =>
                    <Link to={`/hashtag/${h.hashtag_tag.replace('#', '')}`} key={h.hashtag_id}>{h.hashtag_tag}</Link>)}
            </ContainerHashtags>
        </BackHashtag>
    )
}