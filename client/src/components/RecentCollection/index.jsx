import React from "react";
import styles from "./recentcollection.module.css";
import CollectionCard from "@/components/CollectionCard";
import { Link } from "react-router-dom";

export default function RecentCollection() {
  return (
      <div className={styles.recentCollection}>
        <div className={styles.container}>
          <div>
            <h1>Recent Collection</h1>
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
            <button className={styles.btn}>
                <Link to="/gallery">
                  Enter Recent Gallery
                </Link>
            </button>
        </div>
        </div>
      </div>
  );
}
