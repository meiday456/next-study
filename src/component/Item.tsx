import {Button, Header} from "semantic-ui-react";
import styles from "../../styles/item.module.css"

interface Props {
    item: any
}

const Item = ({item }: Props) => {

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.img_item}>
                    <img src={item?.image_link} alt={item?.name}/>
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.tit_item}>{item?.name}</strong>
                    <strong className={styles.num_price}>{item?.price}</strong>
                    <span className={styles.txt_info}>
                        {item?.category ? `${item?.category}/` : ""}
                        {item?.product_type}
          </span>
                    <Button color="orange">구매하기</Button>
                </div>
            </div>
            <Header as="h3">Description</Header>
            <p style={{paddingBottom: 20, fontSize: 18}}>{item?.description}</p>
        </>
    )
}

export default Item