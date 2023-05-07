import React from "react";
import styles from "./allcollections.module.css";
import GalaxyBackground from "@/components/GalaxyBackground";
import Navbar from "@/components/Navbar";
import CollectionCard from "@/components/CollectionCard";

export default function AllCollections() {
  return (
    <GalaxyBackground>
      <Navbar />
      <div className={styles.allCollections}>
        <div className={styles.container}>
          <div>
            <h1>All Collections</h1>
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
        </div>
      </div>
    </GalaxyBackground>
  );
}
