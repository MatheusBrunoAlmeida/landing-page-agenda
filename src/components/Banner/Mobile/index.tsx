import styles  from './style.module.scss'

export function BannerMobile(){
    return(
        <div className={styles.container}>
            <div className={styles.containerButton}>
                <button>Comprar na pré-venda</button>
            </div>
        </div>
    )
}