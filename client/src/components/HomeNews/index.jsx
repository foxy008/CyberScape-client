import React from "react";
import styles from "./homenews.module.css";
import NewsCard from "@/components/NewsCard";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homenews}>
        <div className={styles.container}>
          <div className={styles.button}>
            <h1>NFT News</h1>
            <button className={styles.btn}>
              <Link to="/news">See More News</Link>
            </button>
          </div>
        </div>
        <div className={styles.cards}>
          {/* // mapping data news, slice 4 item */}

          <NewsCard
            imageUrl="https://via.placeholder.com/200x400"
            title="NFT 1"
            description="NFT 1 Description, this is some cool stuff"
          />
          <NewsCard
            imageUrl="https://via.placeholder.com/200x400"
            title="NFT 1"
            description="NFT 1 Description, this is some cool stuff"
          />
          <NewsCard
            imageUrl="https://via.placeholder.com/200x400"
            title="NFT 1"
            description="NFT 1 Description, this is some cool stuff"
          />
          <NewsCard
            imageUrl="https://via.placeholder.com/200x400"
            title="NFT 1"
            description="NFT 1 Description, this is some cool stuff"
          />
        </div>
      </div>
    </div>
  );
}
