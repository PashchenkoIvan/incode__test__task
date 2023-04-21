import styles from './MainPart.module.css';
import {FC} from "react";

interface Props {
    array: Array<any>
}

const MainPart:FC<Props> = ({array}) => {



    return (
        <div className={styles.container}>
            {
                array.map(res =>
                    <div className={styles.block}>
                        <h1>{res.title}</h1>
                        <h1>{res.body}</h1>
                        <div className={styles.authorBlock}>
                            <h1>{res.user.login}</h1>
                            <h1>{res.created_at}</h1>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MainPart;