import styles from './style.module.scss'

export function Info() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerTitle}>
                    <h1 className={styles.title}>COMPRE SUA AGENDA AGORA E RETIRE NO</h1>
                    <h1 className={styles.titleOrange}>ACAMPAMENTO 9 BILHÕES</h1>
                    <span className={styles.description}>Compre sua agenda na pré-venda e retire conosco no acampamento 9 bilhões.</span>
                </div>
            </div>
        </>
    )
}