import styles from './collectioncard.module.css'

export default function CollectionCard(props) {
    return(
        <div className={styles.card}>
            <img src={props.imageUrl}  />
            <div className={styles.description}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>Delete</button>
            </div>
        </div>
    )
}