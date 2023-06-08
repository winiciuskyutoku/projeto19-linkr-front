import axios from "axios"
import dayjs from "dayjs"
import { useEffect } from "react"
import { useState } from "react"
import { BsArrowCounterclockwise } from "react-icons/bs"
import styled from "styled-components"

export default function NewPostsAlert({ exist, date, setDate, setLast_atualization }) {
    const [newPosts, setNewPosts] = useState(0)
    const body = { last_atualization: date }
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem('user_token')}` } }

    useEffect(()=>{
        setDate(dayjs().format('YYYY-MM-DD HH:mm:ss'))
        setLast_atualization(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    },[])

    function atualizeDate(){
        setDate(dayjs().format('YYYY-MM-DD HH:mm:ss'))
        setLast_atualization(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }

    if (localStorage.getItem('user_token')!=='guest_token') {
        setInterval(() => {
            axios.get(`${process.env.REACT_APP_RENDER_URL}/get-new-posts`, config, body)
                .then((res) => setNewPosts(res.data))
                .catch((err) => console.log(err.response.data))
        }, 15000)
    }
    if (!newPosts) {
        return
    }
    return (
        <AlertNewPostContainer exist={exist}>
            <p>{newPosts} new posts, load more!</p>
            <BsArrowCounterclockwise onClick={atualizeDate} size={18} color="white" />
        </AlertNewPostContainer>
    )
}

const AlertNewPostContainer = styled.div`
width:611px;
height:61px;
display:flex;
background: #1877F2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
align-items: center;
justify-content: center;
p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-right: 20px;
}
`