import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import { StyledH2 } from "../TimelinePage/TimelineStyle";
import FramePosts from "../../components/FramePost/FramePosts";
import Hashtags from "../TimelinePage/hashtags";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal"
import styled from "styled-components";
import { StyledTrash } from "../TimelinePage/TimelineStyle";

import { ContainerProfile, UserName, UserPicture, ContainerMain, ContainerPost, FrameNoPost } from "./UserPageStyle";
import { LoadingCircle, LoadingThreeDots } from "../../components/Loading/Loading";

export default function UserPage() {
    const [userProfile, setUserProfile] = useState(null);
    const [likesPosts, setLikesPosts] = useState(null);
    const [reload, setReload] = useState(false);

    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const url = `${process.env.REACT_APP_RENDER_URL}/profile-user/${id}`;

        axios.get(url).then((sucess) => {
            console.log(sucess.data)
            setUserProfile(sucess.data.profile);
            setLikesPosts(sucess.data.likes);
        }).catch((error) => {
            console.log(error.response);
        });
    }, [reload, id]);

    function deletePost(id, user_id, toggleModal) {
        const lsUser = JSON.parse(localStorage.getItem('user'))
        if (lsUser.user_id !== user_id) {
            alert("Voce nao pode excluir esse post")
            return toggleModal()
        }

        const config = { headers: { Authorization: `Bearer ${lsUser.user_token}` } }
        axios.delete(`${process.env.REACT_APP_RENDER_URL}/${user_id}/${id}`, config).then(sucess => console.log(sucess)).catch(fail => console.log(fail))
    }

    return (
        <>
            <ModalProvider backgroundComponent={FadingBackground}>
                <Header />
                <ContainerProfile>
                    <UserName>
                        <UserPicture>
                            {userProfile ? <img src={userProfile[0].user_photo} alt="" /> : ''}
                        </UserPicture>
                        <StyledH2>{userProfile ? `${userProfile[0].username}'s posts` : ''}</StyledH2>
                    </UserName>
                    <ContainerMain>
                        <ContainerPost>
                            {userProfile ?
                                userProfile[0].post_id !== null ?
                                    userProfile.map((p) => <FramePosts key={p.post_id} p={p} likes={likesPosts} user={user} setReload={setReload} deletePost={deletePost} postId={userProfile[0].post_id} userId={id}/> )
                                    :
                                    <FrameNoPost>
                                        <h1>Ainda não há postagens</h1>
                                    </FrameNoPost>
                                :
                                <LoadingThreeDots />
                            }
                        </ContainerPost>
                        <Hashtags />
                    </ContainerMain>
                </ContainerProfile>
            </ModalProvider>
        </>
    );
}

export function FancyModalButton({ deletePost, userId, postId }) {
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