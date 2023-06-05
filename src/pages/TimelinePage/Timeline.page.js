import { useState } from "react"
import Header from "../../components/Header/Header"
import Publish from "./Publish"
import TimeLinePost from "./Post"
import { useEffect } from "react"
import axios from "axios"
import { ContainerContent, StyledH2, TimelineContainer, TitleContainer } from "./TimelineStyle"
import Hashtags from "./hashtags"
import GuestContextHook from "../../hooks/GuestContext.Hook.jsx"

export default function TimelinePage() {
  const {guest} = GuestContextHook();
  console.log('GUEST', guest)
  //att será usado para atualizar a timeline
  const [att, setAtt] = useState(true)
  const [displayDiv, setDisplayDiv] = useState(false);
  const [postData, setPostData] = useState(null)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_RENDER_URL}/get-posts`)
    .then(sucess => setPostData(sucess.data))
    .catch(fail => setPostData(fail.code))
  }, [att])

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
    <TimelineContainer onClick={()=>setDisplayDiv(false)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Header />
      <Hashtags displayDiv={displayDiv} att={att}/>
      <TitleContainer>
        <StyledH2>timeline</StyledH2>
      </TitleContainer>
      <ContainerContent>
        <Publish att={att} setAtt={setAtt} />
        <TimeLinePost postData={postData}></TimeLinePost>
      </ContainerContent>
    </TimelineContainer>
  )
}
