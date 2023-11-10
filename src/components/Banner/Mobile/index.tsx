import Link from 'next/link'
import styles from './style.module.scss'

export function BannerMobile() {
    return (
        <div className={styles.container}>
            <div className={styles.containerButton}>
                <Link href={'#by'}>
                    <button>Comprar na pré-venda</button>
                </Link>
            </div>
        </div>
    )
}