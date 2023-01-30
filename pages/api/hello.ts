// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    name: string
}


// 반드시 export 를 진행해 주어야한다.
//req : http의 인스턴스입니다.수신 메시지 및 일부 사전 구축된 미들웨어
//res : http의 인스턴스입니다.서버 응답 및 일부 도우미 기능
function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {


    //response status 설정
    // res.status(200)
    //response body 설정
    // res.json({name: 'John Doe'})
    res.send({name: 'John Doe'})

    //redirect가 되는 code 값이 따로 있다.
    // res.redirect(307,"/")
}

