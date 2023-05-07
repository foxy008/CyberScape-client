import styles from "./collectionlist.module.css";
import CollectionCard from "../CollectionCard";

export default function CollectionList() {
  return (
    <div className={styles.collectionList}>
      <div className={styles.container}>
        <div>
          <h1>Top Items Collections</h1>
        </div>
        <div className={styles.cards}>
          <CollectionCard
            imageUrl="https://via.placeholder.com/200"
            title="NFT 1"
            description="NFT 1 Description, this is some cool stuff"
          />
          <CollectionCard
            imageUrl="https://via.placeholder.com/200"
            title="NFT 1"
            description="NFT 1 Description, this is some cool stuff"
          />
          <CollectionCard
            imageUrl="https://via.placeholder.com/200"
            title="NFT 1"
            description="NFT 1 Description, this is some cool stuff"
          />
          <CollectionCard
            imageUrl="https://via.placeholder.com/200"
            title="NFT 1"
            description="NFT 1 Description, this is some cool stuff"
          />
        </div>
        <div className={styles.button}>
            <button>
                Enter Virtual Gallery
            </button>
        </div>
      </div>
    </div>
  );
}
