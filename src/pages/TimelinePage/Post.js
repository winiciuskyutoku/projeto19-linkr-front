
import urlMetadata from "url-metadata"
import { Post, PostContent, Loading, StyledTrash } from "./TimelineStyle"
import { PublishContainer } from "./TimelineStyle"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal"
import styled from "styled-components";

export default function TimeLinePost({ postData }) {
    const navigate = useNavigate()
    const regex = /#([a-zA-Z0-9\/\-_]+)/g
    console.log(postData)

    if (typeof (postData) == 'string') {
        return (
            <Loading>
                An error occured while trying to fetch the posts, please refresh the page
            </Loading>
        )
    }

    if (postData === null) {
        return (
            <Loading>
                Caregando...
            </Loading>
        )
    }

    if (postData.length === 0) {
        return (
            <Loading>
                There are no posts yet
            </Loading>
        )
    }

    function deletePost(id, user_id, toggleModal) {
        const lsUser = JSON.parse(localStorage.getItem('user'))
        if (lsUser.user_id !== user_id){
            alert("Voce nao pode excluir esse post")
            return toggleModal()
        }

        const config = { headers: { Authorization: `Bearer ${lsUser.user_token}` } }
        axios.delete(`http://localhost:4000/delete-post/${user_id}/${id}`, config).then(sucess => console.log(sucess)).catch(fail => console.log(fail))
    }

    return (
        <>
            {postData.map(e => {
                return (
                    <Post>
                        <img src={e.user_photo}></img>
                        <PostContent>
                            <h1 onClick={() => navigate(`/user-page/${e.user_id}`)}>{e.username}</h1>
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: e.post_comment.replace(regex, (match) => {
                                        const hashtag = match.substring(1);
                                        return `<strong><a href="/hashtag/${hashtag}">#${hashtag}</a></strong>`;
                                    }),
                                }}
                            ></h2>
                            <div>
                                <div>
                                    <h2>{e.title}</h2>
                                    <p>{e.description}</p>
                                    <a href={e.url} target="_blank">{e.url}</a>
                                </div>
                                <img src={e.image}></img>
                            </div>
                        </PostContent>
                    </Post>
                )
            })}
        </>
    )
}