import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

//basic
export const basic = (req: NextRequest) => new Response("Hello world");

//json response
export const asynchronous = async (req: NextRequest) =>
  new Response(
    JSON.stringify({
      name: "meiday",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        //캐쉬 컨트롤을 통해 동일 요청에 대한 부하 감소 및 성능 향상을 도모한다.
        "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    }
  );

//get Query param
export const gerParam = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  return new Response(name);
};
