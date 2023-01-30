import axios from "axios";
import {GetStaticProps} from "next";
import Link from "next/link";

export interface Book {
    id: string
    title: string
    description : string
}

interface Props {
    data : Book[]
}
const Books = ({data}:Props) => {
    return (
        <>
            {data?.map(({id, title, description}) => (
                <Link href={{pathname : `/isr/books/${id}`, query:{testQ : "dsadsadsa"}}} key={id}>
                {/*<Link href={`/isr/books/${id}`} key={id}>*/}
                    <div style={{padding: "10px", cursor: "pointer", borderBottom: "1px solid black"}}>
                        <span style={{marginRight: "10px"}}>{title}</span>
                        <span>{description}</span>
                    </div>
                </Link>
            ))}
        </>
    )
}
export default Books


export const getStaticProps: GetStaticProps = async () => {
    try {
        const {data} = await axios.get("http://localhost:4000/books")
        return {
            props: {data},
            revalidate: 6000
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}