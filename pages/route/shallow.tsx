import {useRouter} from "next/router";
import {Button} from "semantic-ui-react";
import {useEffect} from "react";
import {GetServerSideProps} from "next";
import DynamicPath from "./[...path]";


interface Props {
    name : string
}

const Shallow = ({name}:Props)=>{

    const router = useRouter()

    const moveHandle = async ()=>{
        await router.push('/route/10',
            undefined,
            { shallow: true }
        )
    }

    return (
        <div>
            <div>{name}</div>
            <Button color={"orange"} onClick={moveHandle}>
                shallow rotuing test</Button>
            <Button color={"orange"}
                    onClick={()=>{router.push("/route/shallow",undefined,{shallow : true})}}>
                shallow rotuing this page</Button>
            <Button color={"orange"}
                    onClick={()=>{router.push("/route/shallow?id=10",undefined,{shallow : true})}}>
                shallow rotuing this page with param</Button>
        </div>
    )
}

DynamicPath.defaultProps ={
    name :"default"
}

export default Shallow

export const getServerSideProps : GetServerSideProps = async(context)=>{
    console.log('do server side props in shallow route')
    return {
        props:{
            name : "serverSide"
        }
    }
}
