import {Book} from "../books";
import {ParsedUrlQuery} from "querystring";
import {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";
import {useRouter} from "next/router";

type GetSpecificBookResponse = {
    data: Book;
};

interface IdParams extends ParsedUrlQuery {
    id: string;
}

export default function SpecificBook({ data: { id, title, description } }: {data : Book}) {

    const router = useRouter()

    console.log(router)

    return (
        <>
            <div key={id}>
                <span style={{ marginRight: "10px" }}>{title}</span>
                <span>{description}</span>
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await axios.get("http://localhost:4000/books");
    const paths = (data as Book[]).map(({ id }) => ({ params: { id: String(id) } }));
    return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const { id } = context.params as IdParams;
        const { data } = await axios.get<GetSpecificBookResponse>(`http://localhost:4000/books/${id}`);
        return {
            props: { data },
            revalidate: 5,
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};