import React from "react";
import styles from "./homenews.module.css";
import NewsCard from "@/components/NewsCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function News() {
  const news = useSelector((state) => state.news);

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.homenews}>
        <div className={styles.container}>
          <div className={styles.button}>
            <h1>NFT News</h1>
            <button className={styles.btn}>
              <Link to="/news">Enter</Link>
            </button>
          </div>
        </div>
        <div className={styles.cards}>
          {/* // mapping data news, slice 4 item */}
          {news?.articles?.slice(0, 4).map((article, index) => (
            <NewsCard
              key={index}
              imageUrl={article.urlToImage}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </div>
      </div>
      </>
  );
}
