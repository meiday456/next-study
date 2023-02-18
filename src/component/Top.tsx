import { Header } from "semantic-ui-react";
import Gnd from "./Gnd";
import styles from "../../styles/top.module.css";

const Top = () => {
  return (
    <div>
      <div className={styles.flex_box}>
        <div className={styles.flex_item_div}>
          <img
            src="/images/icon.jpg"
            alt="logo"
            className={[styles.logo, styles.block].join(" ")}
          />
        </div>
        <Header as="h1">메이데이</Header>
      </div>
      <Gnd />
    </div>
  );
};

export default Top;
