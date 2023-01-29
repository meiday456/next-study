import Head from "next/head";

interface Props {
    name : string
    description : string
}

const HeadInfo = ({name , description}:Props)=>{
    return (
        <Head>
            <title>{name}</title>
            <meta name="description" content={description}/>
        </Head>
    )
}

HeadInfo.defaultProps = {
    name : 'Next study',
    description : "ssr and framework study"
}

export default HeadInfo