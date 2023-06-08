import { useState } from "react"
import Header from "../../components/Header/Header"
import Publish from "./Publish"
import TimeLinePost from "./Post"
import { useEffect } from "react"
import axios from "axios"
import { ContainerContent, StyledH2, TimelineContainer, TitleContainer } from "./TimelineStyle"
import Hashtags from "./hashtags"
import GuestContextHook from "../../hooks/GuestContext.Hook.jsx"
import NewPostsAlert from "./NewPostsAlert"

export default function TimelinePage() {
  const { guest } = GuestContextHook();
  console.log('GUEST', guest)
  //att será usado para atualizar a timeline
  const [att, setAtt] = useState(true)
  const [displayDiv, setDisplayDiv] = useState(false);
  const [postData, setPostData] = useState(null)
  const exist = JSON.parse(localStorage.getItem("user")).user_token
  const [date, setDate] = useState()
  const [last_atualization, setLast_atualization] = useState()
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem('user_token')}` } }
  const body = {last_atualization}
  useEffect(() => {
    if (exist === 'guest_token') {
      console.log(body)
      axios.get(`${process.env.REACT_APP_RENDER_URL}/get-posts`, body)
        .then(sucess => {
          console.log(sucess)
          setPostData(sucess.data)
        })
        .catch(fail => setPostData(fail.code))
    }else{
      axios.get(`${process.env.REACT_APP_RENDER_URL}/get-posts-login`, config, body)
        .then(sucess => setPostData(sucess.data))
        .catch(fail => setPostData(fail.code))
    }
  }, [att, date])

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
      <Hashtags displayDiv={displayDiv} att={att} exist={exist} />
      <TitleContainer>
        <StyledH2>timeline</StyledH2>
      </TitleContainer>
      <ContainerContent>
        <Publish att={att} setAtt={setAtt} exist={exist} config={config}/>
        <NewPostsAlert exist={exist} date={date} setDate={setDate} setLast_atualization={setLast_atualization} />
        <TimeLinePost postData={postData}></TimeLinePost>
      </ContainerContent>
    </TimelineContainer>
  )
}
