import Header from "../../components/Header/Header"
import Publish from "./Publish"
import { TimelineContainer } from "./TimelineStyle"

export default function Timeline() {
  return (
    <TimelineContainer>
      <Header />
      <Publish/>
    </TimelineContainer>
  )
}
