import styles from "./collectionlist.module.css";
import CollectionCard from "../CollectionCard";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserAfterQuotaReduce } from "../../actions/usersCreators";
import { useDispatch, useSelector } from "react-redux";
import getTopNFTs from "@/actions/nftsCreators";
import { useEffect } from "react";

export default function CollectionList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const topNFTs = useSelector(state => state.nfts);

  function handleTop() {
    dispatch(fetchUserAfterQuotaReduce())
    .then(() => navigate('/top'))
    .catch(error => console.log(error));
  }

  useEffect(() => {
    dispatch(getTopNFTs());

  }, [])

  return (
    <div className={styles.collectionList}>
      <div className={styles.container}>
        <div>
          <h1>Top Items Collections</h1>
        </div>
        <div className={styles.cards}>
          {topNFTs.map((topNFTs) => (
            <CollectionCard
            imageUrl={topNFTs.imageUrl}
            title={topNFTs.title}
            description={topNFTs.description}
          />
          ))}
        </div>
        <div className={styles.button}>
            {/* <Link to="/top"> */}
              <button className={styles.btn} onClick={handleTop}>
                  Enter Top Gallery
              </button>
            {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
