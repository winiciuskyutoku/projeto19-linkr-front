import urlMetadata from "url-metadata"
import { Post, PostContent, Loading } from "./TimelineStyle"
import { PublishContainer } from "./TimelineStyle"

export default function TimeLinePost({ postData }) {

    console.log(postData)

    if(typeof(postData) == 'string'){
        return (
            <Loading>
                An error occured while trying to fetch the posts, please refresh the page
            </Loading>
        )
    }

    if (postData === null) {
        return (
            <Loading>
                Caregando...
            </Loading>
        )
    }

    if(postData.length === 0){
        return (
            <Loading>
                There are no posts yet
            </Loading>
        )
    }

    return (
    <>
        <Post>
            <img src="https://http.cat/200" />
            <PostContent>
                <h1>Winicius</h1>
                <h2>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</h2>
                <div>
                    <div>
                        <h2>Como aplicar o material UI em um projeto React</h2>
                        <p>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</p>
                        <a target="_blank">https://medium.com/@pshrmn/a-simple-react-router</a>
                    </div>
                    <img src="https://http.cat/200"></img>
                </div>
            </PostContent>
        </Post>
        {postData.map(e => {
            return (
                <Post>
                    <img src={e.user_photo}></img>
                    <PostContent>
                    <h1>{e.username}</h1>
                    <h2>{e.post_comment}</h2>
                    <div>
                        <div>
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                            <a href={e.url} target="_blank">{e.url}</a>
                        </div>
                        <img src={e.image}></img>
                    </div>
                </PostContent>
                </Post>
            )
        })}
    </>
    )
}
