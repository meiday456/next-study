import axios from "axios";
import Item from "../../src/component/Item";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";

const Post = ({ item, name }: any) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name={"description"} content={item.description} />
      </Head>
      {name} 환경입니다.
      <Item item={item} />
    </>
  );
};

export default Post;

//ssr 구현
//브라우저 X 서버(node)에서 동작한다
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
};
