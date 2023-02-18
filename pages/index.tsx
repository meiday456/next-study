import type { GetStaticProps, GetStaticPropsContext } from "next";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";
import HeadInfo from "../src/component/HeadInfo";

export interface HomeProps {
  list: HomeItem[];
}

export interface HomeItem {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: any;
  currency: any;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating?: number;
  category?: string;
  product_type: string;
  tag_list: any[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: ProductColor[];
}

export interface ProductColor {
  hex_value: string;
  colour_name?: string;
}

const Home = ({ list }: HomeProps) => {
  return (
    <div className={styles.container}>
      <HeadInfo />
      <>
        <Header as={"h3"} style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as={"h3"} style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9, list.length)} />
      </>
    </div>
  );
};

export default Home;

//정적 파일로 생성
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const apiUrl = process.env.api_url as string;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
    },
  };
};
