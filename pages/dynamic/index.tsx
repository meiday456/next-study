import dynamic from "next/dynamic";
import {useState} from "react";


//다이나믹을 사용하면 해당 컴포넌트는 페이지 초기 javascript에서는 제외된다.
//페이지는 suspense fallback을 먼저 렌더링하고, suspense의 boundary가 끝나면 그때 dynamic import를 렌더링한다.
const DynamicItem = dynamic(() => import ("./item"), {
    loading: () => <div>Loading!</div>, //loading 시 리턴되는 정보/ suspense의 확장
    // CSR로 동적으로 로드하려면 ssr : false로 import , 외부 종속 혹은 구성요소가 browser api's 등에 의존하는 경우 유용
    ssr: false,
})


const Main = () => {
    const [num, setNum] = useState(0)

    return (
        <>
            <DynamicItem/>
            <div>
                {num}
                <button onClick={async() => {
                    //버튼을 클릭하는경우에만 외부라이브러리를 사용한다
                    //해당 모듈은 버튼 클릭 이후에만 브라우저에 로드된다.
                    const fn = (await import('./lazyUtil')).default
                    setNum(fn(1,1))
                }
                }>1+1
                </button>
            </div>
        </>

    )

}

export default Main