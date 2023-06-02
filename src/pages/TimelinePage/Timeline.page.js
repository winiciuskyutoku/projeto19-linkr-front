import { useState } from "react"
import Header from "../../components/Header/Header"
import Publish from "./Publish"
import { TimelineContainer } from "./TimelineStyle"
import TimeLinePost from "./Post"
import { useEffect } from "react"
import axios from "axios"

export default function TimelinePage() {
  //att será usado para atualizar a timeline
  const [att, setAtt] = useState(true)
  const [postData, setPostData] = useState(null)

  /* useEffect(() => {
    axios.get(`${process.env.REACT_APP_RENDER_URL}/get-posts`).then(sucess => console.log(sucess)).catch(fail => console.log(fail))
  }, []) */

  useEffect(() => {
    axios.get(`http://localhost:4000/get-posts`).then(sucess => setPostData(sucess.data)).catch(fail => setPostData(fail.code))
  }, [])


  return (
    <TimelineContainer>
      <Header />
      <Publish att={att} setAtt={setAtt}/>
      <TimeLinePost postData={postData}></TimeLinePost>
    </TimelineContainer>
  )
}
