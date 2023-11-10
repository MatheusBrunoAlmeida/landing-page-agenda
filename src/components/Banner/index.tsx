import { BannerMobile } from './Mobile'
import styles from './style.module.scss'

export function Banner() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerButton}>
                    <button>Comprar na pré-venda</button>
                </div>
            </div>
            <BannerMobile />
        </>
    )
}