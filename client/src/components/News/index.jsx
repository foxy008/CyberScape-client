import React from "react";
import styles from './news.module.css'
import NewsCard from '@/components/NewsCard'

export default function News() {
  return (
      <div className={styles.news}>
        <div className={styles.container}>
          <div>
            <h1>NFT News</h1>
          </div>
          <div className={styles.cards}>
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
