import {NextApiRequest, NextApiResponse} from "next";

export default (req:NextApiRequest, res:NextApiResponse)=>{

  console.log("cookie",req.cookies)
  console.log("query ",req.query)
  console.log("body",req.body)


  if (req.method === 'POST'){
    res.setHeader("Set-Cookie" , "a_name=Kang;Max-Age=3600;HttpOnly,Secure")
    res.statusCode = 200
    res.json({message:"ok"})
  }
}
//이렇게 하면 설정을 삽입할 수 있다.
//해당 설정은 이 API에만 적용된다.
export const config = {
  api:{
    //body parsing 여부, false로 하면 body 값을 읽지않는다.
    bodyParser : false,
    //본문에서 허용하는 body 의 최대 크기
    // bodyParser :{sizeLimit: '500kb'},
    //route가 express나 connect 같은 외부 resolver에 의해 handle되는지 여부
    externalResolver : true,
    //응답 메세지의 크기가 4MB를 넘을 경우 경고한다. false 면 제한 해제 //8mb 등 사이즈를 넣을 수 있다.
    responseLimit : false ,
  }
}