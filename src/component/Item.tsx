import { Button, Header } from "semantic-ui-react";
import styles from "../../styles/item.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  item: any;
}

const Item = ({ item }: Props) => {
  const router = useRouter();

  const push = async () => {
    await router.push("/", "/lala", { scroll: true });
  };

  const replace = async () => {
    await router.replace("/", "/replace");
  };

  //이전 페이지로 이동하지만 as 로 url이 대체되었다면 대체된 값으로 출력된다.
  const back = async () => {
    await router.back();
  };

  const prefetch = async () => {
    await router.prefetch("/detail/40", "new_40");
    await router.push("/detail/40");
  };

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      const result = window.confirm("진짜 이동할꺼야?");
      if (result) {
        router.push("/");
      }
      return result;
    });
    return () => {
      router.beforePopState(() => {
        return true;
      });
    };
  }, []);

  const reload = () => {
    router.reload();
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={item?.image_link} alt={item?.name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{item?.name}</strong>
          <strong className={styles.num_price}>{item?.price}</strong>
          <span className={styles.txt_info}>
            {item?.category ? `${item?.category}/` : ""}
            {item?.product_type}
          </span>
          <Button color="orange">구매하기</Button>
          <Button color="red" onClick={push}>
            router push
          </Button>
          <Button color="red" onClick={replace}>
            router replace
          </Button>
          <Button color="red" onClick={back}>
            router back
          </Button>
          <Button color="red" onClick={reload}>
            router reload
          </Button>
          <Button color="red" onClick={prefetch}>
            router prefetch
          </Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{item?.description}</p>
    </>
  );
};

export default Item;
