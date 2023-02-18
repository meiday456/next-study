import { NextPageContext } from "next";

const Item = ({ body }: any) => {
  return <div>{body}</div>;
};

Item.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json: any = await res.json();

  return { body: json.body };
};

export default Item;
