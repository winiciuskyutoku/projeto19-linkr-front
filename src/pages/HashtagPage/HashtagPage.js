import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Publish from "../TimelinePage/Publish"
import { ContainerContent, StyledH2, TimelineContainer, TitleContainer } from "../TimelinePage/TimelineStyle"
import Hashtags from "../TimelinePage/hashtags"
import { useParams } from "react-router-dom"
import TimeLinePost from "../TimelinePage/Post"
import axios from "axios"

export default function HashtagPage() {
    const page = useParams()
    const [postData, setPostData] = useState(null)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_RENDER_URL}/hashtags/${page.hashtag}`)
            .then(sucess => setPostData(sucess.data))
            .catch(fail => setPostData(fail.code))
    }, [page])
    //att será usado para atualizar a timeline
    const [att, setAtt] = useState(true)
    const [displayDiv, setDisplayDiv] = useState(false);
    let initialX = null;

    function handleTouchStart(event) {
        const touch = event.touches[0];
        initialX = touch.clientX;
    }

    function handleTouchEnd(event) {
        if (initialX === null) {
            return;
        }

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - initialX;

        if (deltaX < 0) {
            setDisplayDiv(true);
        }

        initialX = null;
    }
    if (postData === null) {
        return (
            <TimelineContainer onClick={() => setDisplayDiv(false)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <Header />
                <Hashtags displayDiv={displayDiv} />            
            </TimelineContainer>
        )
    }
    return (
        <TimelineContainer onClick={() => setDisplayDiv(false)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <Header />
            <Hashtags displayDiv={displayDiv} />
            <TitleContainer>
                <StyledH2>{`# ${page.hashtag}`}</StyledH2>
            </TitleContainer>
            <ContainerContent>
                <TimeLinePost postData={postData} />
            </ContainerContent>
        </TimelineContainer>
    )
}
