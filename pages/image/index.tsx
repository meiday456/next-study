import Image from "next/image";
import image600 from "./600.png";
import image1200 from "./1200.png";
import highQualityImage from "./highQualityImage.jpg";

const Index = () => {
  const myLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality: number;
  }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div style={{ position: "relative" }}>
      <Image
        // loader={myLoader}
        src={image1200}
        alt="Picture of the author"
        width={500}
        height={500}
        placeholder={"blur"}
      />
      <Image
        // loader={myLoader}
        src={"/images/icon.jpg"}
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <Image
        src={image600}
        alt={"사이즈 600이미지"}
        width={300}
        height={300}
        // fill
      />

      <Image
        src={highQualityImage}
        alt={"높은 화질의 이미지"}
        // fill
        quality={1}
        width={500}
        height={1000}
        loading={"eager"}
      />
      <div style={{ backgroundColor: "black" }}>
        <Image
          src={
            "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
          }
          alt={"Google logo"}
          width={500}
          height={200}
        />
      </div>
    </div>
  );
};

export default Index;
