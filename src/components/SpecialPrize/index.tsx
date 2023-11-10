import styles from './style.module.scss'

import fireGif from '../../../public/images/fire.gif'
import Image from 'next/image'

export function SpecialPrize() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerTitle}>
                    <h1 className={styles.title}>PRÊMIO ESPECIAL!!!!!</h1>
                    <h1 className={styles.subTitle}>
                        Na compra de 10 agendas concorra a uma
                        <br />
                        CARAVANA DOKMOS
                    </h1>
                </div>

                <div className={styles.containerDescription}>
                    <span>
                        Na compra da sua agenda, sua localidade concorre a uma caravana Dokmos Sede para sua Localidade
                        <br/>
                        Caravana com:
                        <br/>
                        Louvor Dokmos sede
                        <br/>
                        SOS Dokmos sede
                        <br/>
                        GAD dokmos sede
                        <br/>
                        IMS
                        <br/>
                        Regras:
                        <br/>
                        * a localidade deve ter comprado pelo menos 10 agendas no total. Cada compra é uma chance de concorrer!
                        <br/>
                        * o sorteio será feito em live diretamente da chácara do 9 bilhões
                    </span>
                </div>

                <div className={styles.containerButton}>
                    <button>
                        <Image src={fireGif} alt="" width={30}/>
                        COMPRAR AGORA
                        <Image src={fireGif} alt="" width={30}/>
                    </button>
                </div>
            </div>
        </>
    )
}