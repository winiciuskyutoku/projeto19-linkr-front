import { useState } from "react"
import Header from "../../components/Header/Header"
import Publish from "./Publish"
import { ContainerContent, StyledH2, TimelineContainer, TitleContainer } from "./TimelineStyle"
import Hashtags from "./hashtags"
import { useParams } from "react-router-dom"

export default function HashtagPage() {
    const page = useParams()
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

    return (
        <TimelineContainer onClick={() => setDisplayDiv(false)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <Header />
            <Hashtags displayDiv={displayDiv} />
            <TitleContainer>
                <StyledH2>{`# ${page.hashtag}`}</StyledH2>
            </TitleContainer>
            <ContainerContent>

            </ContainerContent>
        </TimelineContainer>
    )
}
