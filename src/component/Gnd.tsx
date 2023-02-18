import { Menu, MenuItemProps } from "semantic-ui-react";
import { useRouter } from "next/router";

const Gnd = () => {
  const router = useRouter();
  let activeItem = "home";
  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname.includes("about")) {
    activeItem = "about";
  } else if (router.pathname.includes("admin")) {
    activeItem = "admin";
  }

  const goLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
      // location.href = "/about" //페이지 새로고침 / spa 장점이 사라짐
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={() => {
          router.push("/admin");
        }}
      />
    </Menu>
  );
};

export default Gnd;
