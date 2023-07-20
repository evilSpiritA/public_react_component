import styles from "./topbar.module.scss";
import { clsx } from 'clsx';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type T_ItemProps = {
    label?: string;
}


const Topbar: React.FC<T_ItemProps> = ({ label }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={clsx(styles.topbar, styles.frostedGlass)}>
                <div className={styles.wrapper}>
                    <div className={styles.topLeft}>
                        <button className={clsx(styles.backBtn)} onClick={() => navigate(-1)}>
                            <span>Back</span>
                        </button>
                        <Link to='/MainDisplayPage' className={styles.Link} >
                            <div className={styles.logo}>
                                {label || 'Ryan Work Space'}
                            </div>
                        </Link>
                    </div>
                    <div className={styles.topRight}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar;