import { useState } from "react";
import { CommentInput, LinkInput, PublishButton, PublishContainer, PublishTitle } from "./TimelineStyle";
import axios from "axios";
export default function Publish({ setAtt, att, exist }) {
    const [post_link, setPost_link] = useState()
    const [post_comment, setPost_comment] = useState()
    const [disable, setDisable] = useState(false)
    const userImage = JSON.parse(localStorage.getItem("user")).user_photo
    console.log(exist==='guest_token')
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem('user_token')}` } }
    const body = { post_comment, post_link }
    console.log('CONFIG',config, body)
    function handleForm(e) {
        e.preventDefault()
        setDisable(true)
        axios.post(`${process.env.REACT_APP_RENDER_URL}/post`, body, config)
            .then((res) => {
                console.log(res.data)
                setDisable(false)
                setPost_comment("")
                setPost_link("")
                setAtt(!att)
            })
            .catch((err) => {
                console.log(err.response.data)
                alert("Houve um erro ao publicar seu link")
                setDisable(false)
            })
    }
    return (
        <PublishContainer data-test="publish-box" exist={exist} onSubmit={handleForm}>
            <img alt="Imagem do usuário" src={userImage} />
            <PublishTitle>What are you going to share today?</PublishTitle>
            <LinkInput data-test="link" placeholder="http://..." type="url" value={post_link}
                onChange={(e) => setPost_link(e.target.value)} disabled={disable} required />
            <CommentInput data-test="description" placeholder="Awesome article about #javascript" type="text"
                value={post_comment} onChange={(e) => setPost_comment(e.target.value)} disabled={disable} />
            <PublishButton data-test="publish-btn" type="submit" disabled={disable}>{disable ? 'Publishing...' : 'Publish'}</PublishButton>
        </PublishContainer>
    )
}