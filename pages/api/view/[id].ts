import {NextApiRequest, NextApiResponse} from "next";
//Dynamic API Route 작성
export default (req:NextApiRequest, res:NextApiResponse)=>{
    res.statusCode = 200
    res.json({id:req.query.id})
}