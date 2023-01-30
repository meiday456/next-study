import localFont  from "@next/font/local"


const krSans = localFont({src:'../../public/fonts/NotoSansKR-Light.otf'})
// const krSans = localFont({src:[
//         {
//             path : "../../public/fonts/NotoSansKR-Light.otf",
//             weight: '400',
//             style : 'normal'
//         },
//         {
//             path : "../../public/fonts/NotoSansKR-Bold.otf",
//             weight: '400',
//             style : 'italic'
//         }
//     ]})

const WithOutNextFont = ()=>{
    return (
        <main className={krSans.className}>
            <p>글꼴을 확인하는 중입니다. @next/font를 적용하지 않았습니다. local Font 적용</p>
            <p>Check the font, No Using @next/font</p>
        </main>
    )
}

export default WithOutNextFont