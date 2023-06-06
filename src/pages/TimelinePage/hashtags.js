import { useEffect, useState } from "react";
import { BackHashtag, ContainerHashtags, HashtagTitle } from "./TimelineStyle";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Hashtags({ displayDiv, att, exist }) {
    const [hashtags, setHashtags] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_RENDER_URL}/hashtags`)
            .then((res) => {
                setHashtags(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }, [att])

    if (!hashtags || hashtags.length === 0) {
        return (
            <BackHashtag exist={exist} displayDiv={displayDiv}>
                <ContainerHashtags data-test='trending' exist={exist} displayDiv={displayDiv} >
                    <HashtagTitle>
                        <h2>trending</h2>
                    </HashtagTitle>
                </ContainerHashtags>
            </BackHashtag >
        )
    }
    return (
        <BackHashtag exist={exist} displayDiv={displayDiv}>
            <ContainerHashtags data-test='trending' exist={exist} displayDiv={displayDiv}>
                <HashtagTitle>
                    <h2>trending</h2>
                </HashtagTitle>
                {hashtags.map((h) =>
                    <Link data-test='hashtag' to={`/hashtag/${h.hashtag_tag.replace('#', '')}`} key={h.hashtag_id}>{h.hashtag_tag}</Link>)}
            </ContainerHashtags>
        </BackHashtag>
    )
}