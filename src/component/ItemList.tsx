import {Grid} from "semantic-ui-react";
import styles from "../../styles/ItemList.module.css"
import Link from "next/link";

interface Props {
    list: any[]
}

const ItemList = ({list}: Props) => {
    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((item) => (
                        <Grid.Column key={item.id}>
                            {/*next link를 사용하여 파일이 생성되었다
                            prefetch 속성이 true로 정적생성을한다.
                            페이지에 보여지는 요소들을 prefetching 해서 정적 생성을 해버린다.
                            속성값을 바꾸더라도 계속해서 생성되는 문제가 있다.
                            */}
                            <Link href={`/detail/${item.id}`} prefetch={false} >
                                    <div className={styles.wrap}>
                                        <img
                                            src={item.image_link}
                                            alt={item.name}
                                            className={styles.img_item}
                                        />
                                        <strong className={styles.tit_item}>{item.name}</strong>
                                        <span className={styles.txt_info}>{item.category} {item.product_type}</span>
                                        <strong className={styles.num_price}>${item.price}</strong>
                                    </div>
                            </Link>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default ItemList