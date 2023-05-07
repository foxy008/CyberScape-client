import React from "react";

export default function News() {
  return (
    <GalaxyBackground>
      <Navbar />
      <div className={styles.news}>
        <div className={styles.container}>
          <div>
            <h1>NFT News</h1>
          </div>
          <div className={styles.cards}>
            <NewsCard
              imageUrl="https://via.placeholder.com/200"
              title="NFT 1"
              description="NFT 1 Description, this is some cool stuff"
            />
          </div>
        </div>
      </div>
    </GalaxyBackground>
  );
}
