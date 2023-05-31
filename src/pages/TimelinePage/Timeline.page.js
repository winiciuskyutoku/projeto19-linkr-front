import { useState } from "react"
import Header from "../../components/Header/Header"
import Publish from "./Publish"
import { TimelineContainer } from "./TimelineStyle"

export default function Timeline() {
  //att será usado para atualizar a timeline
  const [att, setAtt] = useState(true)
  return (
    <TimelineContainer>
      <Header />
      <Publish att={att} setAtt={setAtt}/>
    </TimelineContainer>
  )
}
