import styles from "./collectionlist.module.css";
import CollectionCard from "../CollectionCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function CollectionList() {
  const topNFTs = useSelector((state) => state.nfts);
  const profile = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch(getTopNFTs(true));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.collectionList}>
        <div className={styles.container}>
          <div className={styles.button}>
            <h1>Top Items Collections</h1>
            <Link to="/top">
              <button className={styles.btn}>
                Enter Top Gallery
              </button>
            </Link>
          </div>
          <div className={styles.cards}>
            {topNFTs.map((topNFTs) => (
              <CollectionCard
                imageUrl={topNFTs.imageUrl}
                title={topNFTs.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
