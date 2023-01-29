import {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";

interface Post {
    userId: number
    id: number
    title: string
    body: string
}

interface Props {
    posts : Post[]
}

const IsrTest = ({posts}:Props)=>{

    const onDemandHandle = async()=>{
        console.log("do api call")
        await axios.get("/api/revalidation")
        console.log("do api call done")
    }

    return (
        <div>
            <h1>api 활용</h1>
            <button onClick={()=> {
                onDemandHandle()
            }}>on demand test</button>
            <ul>
                {
                    posts?.map((post)=>{
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>

        </div>
    )
}


export default IsrTest

// export const getStaticPaths:GetStaticPaths  = async(context)=>{
//
//     const apiUrl  = `https://jsonplaceholder.typicode.com/posts`
//     const {data}  = await axios.get(apiUrl)
//
//     return {
//         paths : data.slice(0,10).map((post : Post)=>({params : {id : post.id}})),
//         fallback : true
//     }
// }


export const getStaticProps : GetStaticProps = async (context)=>{

    const apiUrl  = `https://jsonplaceholder.typicode.com/posts`
    const {data} = await axios.get(apiUrl)

    return {
        props : {
            posts : data
        },
        revalidate : 30
    }
}