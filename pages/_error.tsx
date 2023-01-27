//
//서버 쪽으로 에러를 보내는 동작을 동반하기때문에 이 파일은 정적으로 생성되지않는다.
//현재와 같은 파일로 만들게되면 서버, 클라이언트 측 에러를 해당 페이지에서 관리 할 수 있다.
function Error({ statusCode  }:{statusCode:number}) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

Error.getInitialProps = ({ res, err }:{[key:string]:any}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error