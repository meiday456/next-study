import {NextApiRequest, NextApiResponse} from "next";

export default (req:NextApiRequest, res:NextApiResponse)=>{
  if (req.method === 'POST'){
    res.setHeader("Set-Cookie" , "a_name=Kang;Max-Age=3600;HttpOnly,Secure")
    res.statusCode = 200
    res.json({message:"ok"})
  }
}