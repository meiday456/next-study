import axios from "axios";
import Item from "../../src/component/Item";
import {GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext} from "next";
import Head from "next/head";
import {useRouter} from "next/router";
import {Loader} from "semantic-ui-react";


// export interface Root2 {
//     id: number
//     brand: string
//     name: string
//     price: string
//     price_sign: any
//     currency: any
//     image_link: string
//     product_link: string
//     website_link: string
//     description: string
//     rating?: number
//     category?: string
//     product_type: string
//     tag_list: any[]
//     created_at: string
//     updated_at: string
//     product_api_url: string
//     api_featured_image: string
//     product_colors: ProductColor[]
// }
//
// export interface ProductColor {
//     hex_value: string
//     colour_name?: string
// }



const Post = ({item ,name}: any) => {
    const router = useRouter()

    console.log(router.isFallback)

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
            <Head>
                <title>{item?.name}</title>
                <meta name={"description"} content={item?.description}/>
            </Head>
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
        paths :data.slice(0,10).map((d:any)=>({
            params :{
                id : d.id.toString()
            }
        })),
        fallback : true
    }
}



export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const id = context.params!.id
    const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    const res = await axios.get(apiUrl)
    const data = res.data

    return {
        props: {
            item: data,
            name : process.env.name
        }
    }
}