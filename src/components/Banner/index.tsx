import Link from 'next/link'
import { BannerMobile } from './Mobile'
import styles from './style.module.scss'

export function Banner() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerButton}>
                    <Link href={'#by'}>
                        <button>Comprar na pré-venda</button>
                    </Link>
                </div>
            </div>
            <BannerMobile />
        </>
    )
}