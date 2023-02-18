import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Set-Cookie", "a_name=Kang;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
};
