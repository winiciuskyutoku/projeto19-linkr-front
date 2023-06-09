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
import dayjs from "dayjs"
import { exist, config } from "../../constants/constants"

export default function TimelinePage() {
  const { guest } = GuestContextHook();
  console.log('GUEST', guest)
  //att será usado para atualizar a timeline
  const [att, setAtt] = useState(true)
  const [displayDiv, setDisplayDiv] = useState(false);
  const [postData, setPostData] = useState(null)
  const [date, setDate] = useState()
  const [last_atualization, setLast_atualization] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  const [isLoading, setIsLoading] = useState(false)

  function isPageBottom() {
    return (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    );
  }

  useEffect(() => {
    setIsLoading(true)
    if (exist === 'guest_token') {
      console.log('oi')
      axios.get(`${process.env.REACT_APP_RENDER_URL}/get-posts/${last_atualization}`)
        .then(sucess => {
          const newData = postData
          newData?setPostData([...newData, sucess.data]):setPostData(sucess.data)
          setLast_atualization(sucess.data[4].created_at)
          setIsLoading(false)
        })
        .catch(fail => {
          setPostData(fail.code)
          setIsLoading(false)
        })
    } else {
      axios.get(`${process.env.REACT_APP_RENDER_URL}/get-posts-login${last_atualization}`, config)
        .then(sucess => {
          const newData = postData
          newData?setPostData([...newData, sucess.data]):setPostData(sucess.data)
          setLast_atualization(sucess.data[4].created_at)
          setIsLoading(false)
        })
        .catch(fail => {
          setPostData(fail.code)
          setIsLoading(false)
        })
    }
  }, [att, date])

  useEffect(() => {
    function handleScroll() {
      if (isPageBottom() && !isLoading) {
        setAtt(a=>!a)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading])

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
      <Hashtags displayDiv={displayDiv} att={att} />
      <TitleContainer>
        <StyledH2>timeline</StyledH2>
      </TitleContainer>
      <ContainerContent>
        <Publish att={att} setAtt={setAtt} />
        <NewPostsAlert date={date} setDate={setDate} setLast_atualization={setLast_atualization} />
        <TimeLinePost postData={postData} isLoading={isLoading}></TimeLinePost>
      </ContainerContent>
    </TimelineContainer>
  )
}
