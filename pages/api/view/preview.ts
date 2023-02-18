import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // 전달하는 데이터는 getStaticProps에서 사용할수 있습니다.
  // 이렇게 작성하면 , next에 대한 모든 요청은 미리보기 모드로 간주되며,
  // 정적으로 생성된 페이지에 대한 동작은 나중에 변경된다.
  //
  res.setPreviewData(
    { type: "preview" },
    {
      maxAge: 60,
      path: "/view/preview",
    }
  );
  // res.end('Preview mode enabled')
  res.redirect("/");
};
