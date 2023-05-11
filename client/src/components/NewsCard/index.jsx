import styles from "./newscard.module.css";

export default function NewsCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.imageUrl} />
      <h1>{props.title}</h1>
      <div className={styles.description}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
