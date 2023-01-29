import '../styles/globals.css'
import type {AppProps} from 'next/app'
import "semantic-ui-css/semantic.css"
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";


//레이아웃 컴포넌트 적용을 여기서 해주면 된다.

//Component는 현재 넘어온컴포넌트를 의미
//pageProps data fetching으로 미리 가져온 정보
function MyApp({Component, pageProps}: AppProps) {

    // @ts-ignore
    const getLayout = (Component.getLayout) || ((page:React.ReactNode)=> {
        return (<div style={{width : 1000 , margin : "0 auto"}}>
            <Top/>
            {page}
            <Footer/>
        </div>)

    })

    return getLayout(<Component {...pageProps}/>)

}

export default MyApp

/*
  페이지 전환시 레이아웃을 유지할 수 있음
  페이지 전환시 상태값을 유지할 수 있음 <-- 중요
  componentDidCatch 를 이용해서 커스텀 에러 핸들링을 할 수 있음
  추가적인 데이터를 페이지로 주입시키는것이 가능 <--중요
  글로벌 CSS 같은 것을 여기에 명시
 */