import styles from './style.module.scss'

import fireGif from '../../../public/images/fire.gif'
import Image from 'next/image'

export function SpecialPrize() {
    return (
        <>
            <div className={styles.container} id='by'>
                <div className={styles.containerTitle}>
                    <h1 className={styles.title}>PRÊMIO ESPECIAL!!!!!</h1>
                    <h1 className={styles.subTitle}>
                        Compre sua agenda e concorra a uma
                        <br />
                        CARAVANA DOKMOS
                    </h1>
                </div>

                <div className={styles.containerDescription}>
                    <span>
                        REGRAS:
                        <br/>
                        A cada 10 agendas, a localidade tem uma chance de concorrer à:
                        <br/>
                        Uma Caravana Dokmos com:
                        <br/>
                        Louvor Dokmos sede
                        <br/>
                        SOS Dokmos sede
                        <br/>
                        GAD dokmos sede
                        <br/>
                        IMS
                        <br/>
                        & MUITO MAIS
                        <br/>
                        * o sorteio será feito em live diretamente da chácara do 9 bilhões
                        
                    </span>
                </div>
            </div>
        </>
    )
}