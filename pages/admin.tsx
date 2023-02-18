import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

const Admin = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  const logoutHandle = () => {
    axios.get("/api/logOut").then((res) => {
      if (res.status === 200) {
        router.push("/");
        setIsLogin(false);
      }
    });
  };

  useEffect(() => {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        //로그인 안됨
        router.push("/login");
        setIsLogin(false);
      }
    });
  }, []);

  return (
    <>
      <div>admin</div>
      {isLogin && <Button onClick={logoutHandle}>Logout</Button>}
    </>
  );
};

export default Admin;
