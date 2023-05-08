import styles from './newscard.module.css'

export default function NewsCard(props) {
    return(
        <div className={styles.card}>
            <img src={props.imageUrl}  />
            <div className={styles.description}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}