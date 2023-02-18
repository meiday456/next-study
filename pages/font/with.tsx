import { Roboto } from "@next/font/google";

//이렇게 사용하면 브라우저에 의해 Google로 전송되는 요청은 없다.
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const WithNextFont = () => {
  return (
    <main className={roboto.className}>
      <p>글꼴을 확인하는 중입니다. @next/font를 적용하였습니다.</p>
      <p>Check the font, Using @next/font</p>
    </main>
  );
};

export default WithNextFont;
