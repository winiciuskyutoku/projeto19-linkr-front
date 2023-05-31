import { useState } from "react"
import Header from "../../components/Header/Header"
import Publish from "./Publish"
import { ContainerContent, StyledH2, TimelineContainer, TitleContainer } from "./TimelineStyle"
import Hashtags from "./hashtags"

export default function Timeline() {
  //att será usado para atualizar a timeline
  const [att, setAtt] = useState(true)
  return (
    <TimelineContainer>
      <Header />
      <Hashtags />
      <TitleContainer>
        <StyledH2>timeline</StyledH2>
      </TitleContainer>
      <ContainerContent>
        <Publish att={att} setAtt={setAtt} />
      </ContainerContent>
    </TimelineContainer>
  )
}
