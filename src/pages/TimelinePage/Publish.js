import { CommentInput, LinkInput, PublishButton, PublishContainer, PublishTitle, StyledH2, TitleContainer } from "./TimelineStyle";

export default function Publish() {
    return (
        <>
            <TitleContainer>
                <StyledH2>timeline</StyledH2>
            </TitleContainer>
            <PublishContainer>
                <img />
                <PublishTitle>What are you going to share today?</PublishTitle>
                <LinkInput placeholder="http://..." type="url" />
                <CommentInput placeholder="Awesome article about #javascript" type="text" />
                <PublishButton>Publish</PublishButton>
            </PublishContainer>
        </>
    )
}