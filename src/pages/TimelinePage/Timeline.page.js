import { useState } from "react"
import Header from "../../components/Header/Header"
import Publish from "./Publish"
import TimeLinePost from "./Post"
import { useEffect } from "react"
import axios from "axios"
import { Carregando, ContainerContent, StyledH2, TimelineContainer, TitleContainer } from "./TimelineStyle"
import Hashtags from "./hashtags"
import GuestContextHook from "../../hooks/GuestContext.Hook.jsx"
import NewPostsAlert from "./NewPostsAlert"
import dayjs from "dayjs"
import { exist, config } from "../../constants/constants"
import transformeDate from "./transformDate"
import InfiniteScroll from "react-infinite-scroller"

export default function TimelinePage() {
  const { guest } = GuestContextHook();
  console.log('GUEST', guest)
  //att será usado para atualizar a timeline
  const [att, setAtt] = useState(true)
  const [displayDiv, setDisplayDiv] = useState(false);
  const [postData, setPostData] = useState(null)
  const [date, setDate] = useState()
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    loadPosts()
  }, [att, date])

  function loadPosts(){
    if (exist === 'guest_token') {
      axios.get(`${process.env.REACT_APP_RENDER_URL}/get-posts/${page}`)
        .then(sucess => {
          const newData = postData
          newData ? setPostData(prevData => prevData.concat(sucess.data)) : setPostData(sucess.data)
          const newPage = page+10
          setPage(newPage)
          setHasMore(newData.length > 0)
        })
        .catch(fail => {
          console.log(fail.code)
        })
    } else {
      axios.get(`${process.env.REACT_APP_RENDER_URL}/get-posts-login/${page}`, config)
        .then(sucess => {
          console.log(sucess.data)
          const newData = postData
          newData ? setPostData(prevData => prevData.concat(sucess.data)) : setPostData(sucess.data)
          const newPage = page+10
          setPage(newPage)
          setHasMore(newData.length > 0)
        })
        .catch(fail => {
          console.log(fail.code)
        })
    }
  }

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
    <InfiniteScroll
      pageStart={0}
      loadMore={loadPosts}
      hasMore={hasMore}
      loader={<Carregando key={0}>loading...</Carregando>}
    >
      <TimelineContainer onClick={() => setDisplayDiv(false)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <Header />
        <Hashtags displayDiv={displayDiv} att={att} />
        <TitleContainer>
          <StyledH2>timeline</StyledH2>
        </TitleContainer>
        <ContainerContent>
          <Publish att={att} setAtt={setAtt} />
          <NewPostsAlert date={date} setDate={setDate} setPostData={setPostData} />
          <TimeLinePost postData={postData} ></TimeLinePost>
        </ContainerContent>
      </TimelineContainer>
    </InfiniteScroll>
  )
}

