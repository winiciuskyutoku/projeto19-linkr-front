import urlMetadata from "url-metadata"
import { Post, PostContent, Loading, StyledTrash } from "./TimelineStyle"
import { PublishContainer } from "./TimelineStyle"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal"
import styled from "styled-components";

export default function TimeLinePost({ postData }) {
    const navigate = useNavigate();

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
                    <ModalProvider backgroundComponent={FadingBackground}>
                        <Post>
                            <img src={e.user_photo}></img>
                            <PostContent>
                                <h1 onClick={() => navigate(`/user-page/${e.user_id}`)}>{e.username}</h1>
                                <h2>{e.post_comment}</h2>
                                <div>
                                    <div>
                                        <h2>{e.title}</h2>
                                        <p>{e.description}</p>
                                        <a href={e.url} target="_blank">{e.url}</a>
                                    </div>
                                    <div>
                                        <img src={e.image}></img>
                                    </div>
                                </div>
                            </PostContent>
                        </Post>
                    </ModalProvider>
                )
            })}
        </>
    )
}


function FancyModalButton({ deletePost, userId, postId }) {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    function toggleModal(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
            setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });
    }

    return (
        <div>
            <StyledTrash onClick={toggleModal}></StyledTrash>
            <StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
                <p>Are you sure you want to delete this post?</p>
                <div>
                    <button onClick={toggleModal}>No, go back</button>
                    <button onClick={() => deletePost(postId, userId, toggleModal)}>Yes, delete it</button>
                </div>
            </StyledModal>
        </div>
    );
}

const StyledModal = Modal.styled`
    width: 50%;
    max-width: 550px;
    height: 262px;
    background-color: black;
    padding: 10px;
    border-radius: 50px;
    color: white;
    font-family: "Lato", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    p{
        font-size: 34px;
        text-align: center;
    }
    div{
        display: flex;
        gap: 15px;
        button{
            border-radius: 5px;
            width: 134px;
            height: 37px;
            border: none;
        }
        button:first-child(){
            background-color: #FFFFFF;
            color: #1877F2;
        }
        button:nth-child(2){
            background-color: #1877F2;
            color: #FFFFFF;
        }
    }
`

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;