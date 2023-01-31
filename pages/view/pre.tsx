import {GetStaticProps} from "next";
import axios from "axios";


interface Props {
    type: string
}

const Preview = ({type}: Props) => {
    return (
        <div>{type}</div>
    )
}

export default Preview

Preview.defaultProps = {
    type: "default"
}


//미리보기가 셋팅된 경우에 이페이로 이동하는경우에 context.data 등이 나온다
export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context.preview)
    console.log(typeof context.previewData)

    let type=""
    if (context.previewData){
        type = (context.previewData as { [key: string]: string }).type
    }

    return {
        props: {
            type: type
        }
    }
}