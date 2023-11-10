import Image from 'next/image'
import styles from './style.module.scss'

import capaAgenda from '../../../public/images/capaAgenda.png'
import fireGif from '../../../public/images/fire.gif'
import Link from 'next/link'

export function Product() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.productContainer}>
                    <Image src={capaAgenda} alt='' width={300} />

                    <h1>Agenda Dokmos 2024</h1>

                    <h1 className={styles.price}>R$ 30</h1>

                    <div className={styles.containerButton}>
                        <Link href={'https://fontedavida.com.br/eventos/534047/agenda-dokmos-2024'}>
                            <button>
                                <Image src={fireGif} alt="" width={30} />
                                COMPRAR AGORA
                                <Image src={fireGif} alt="" width={30} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}