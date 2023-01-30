import axios from "axios";
import Item from "../../src/component/Item";
import {GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext} from "next";
import {useRouter} from "next/router";
import {Loader} from "semantic-ui-react";
import HeadInfo from "../../src/component/HeadInfo";


const Post = ({item ,name}: any) => {
    const router = useRouter()

    console.log(router.isFallback)
    console.log(router)

    console.log(process.env.NEXT_PUBLIC_API_URL)

    if (router.isFallback){
        return (
            <div style={{padding:"100px 0"}}>
                <Loader active inline={"centered"}>
                    Loading
                </Loader>
            </div>
        )
    }

    return (
        <>
            <HeadInfo name={item.name} description={item.description}/>
            {name || ''} 환경입니다.
            <Item item={item ?? null}/>
        </>
    )
}

export default Post

//이렇게 만들고 build 하는경우 해당 paths에 해당하는 페이지들이 생성이되고
//나머지는 생성이 되지않는다.
// fallback option을 false로 두는경우 ,없는페이지 대응을 하지않느다.
//blocking 은 되고 true는 안되는 이유가 무엇일까
export const getStaticPaths: GetStaticPaths = async (context:GetStaticPathsContext)=>{
    const apiUrl = process.env.api_url as string
    const res = await axios.get(apiUrl)
    const data = res.data


    return {
        paths :
            data.slice(0,10).map((d:any)=>({
            params :{
                id : d.id.toString()
            }
        })),
        fallback : true
    }
}


//getStaticProps 를 사용하는경우 getStaticPaths을 함께 정의 해주어야한다.
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const id = context.params!.id
    const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    const res = await axios.get(apiUrl)
    const data = res.data

    return {
        props: {
            item: data,
            name : process.env.name
        },
        revalidate :20 //설정한 시간이후 접속이 일어나는 시점에 re-generation을 한다(정적생성)
    }
}