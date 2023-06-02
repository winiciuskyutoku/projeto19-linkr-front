import { useEffect, useState } from "react";
import { ContainerHashtags, HashtagTitle } from "./TimelineStyle";
import axios from "axios";

export default function Hashtags(){
    const [hashtags, setHashtags] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_RENDER_URL}/hashtags`)
        .then((res)=>{
            console.log(res.data)
            setHashtags(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }, [])
    if(!hashtags||hashtags.length===0){
        return(
            <ContainerHashtags>
            <HashtagTitle>
                <h2>trending</h2>
            </HashtagTitle>
        </ContainerHashtags>
        )
    }
    return(
        <ContainerHashtags>
            <HashtagTitle>
                <h2>trending</h2>
            </HashtagTitle>
            {hashtags.map((h)=>
            <p key={h.hashtag_id}>{h.hashtag_tag}</p>)}
        </ContainerHashtags>
    )
}