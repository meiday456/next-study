import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

interface Props {
  name: string;
}

const DynamicPath = ({ name }: Props) => {
  const router = useRouter();

  return (
    <>
      <div>{JSON.stringify(router.query)}</div>
      <div>{name}</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("do server side props in dynamic route");
  return {
    props: {
      name: "serverSide",
    },
  };
};

DynamicPath.defaultProps = {
  name: "default",
};

export default DynamicPath;
