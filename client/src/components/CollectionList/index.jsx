import styles from "./collectionlist.module.css";
import CollectionCard from "../CollectionCard";
import { useNavigate } from "react-router-dom";
import { fetchUserAfterQuotaReduce } from "../../actions/usersCreators";
import { useDispatch, useSelector } from "react-redux";
import getTopNFTs from "@/actions/nftsCreators";
import { useEffect } from "react";

export default function CollectionList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const topNFTs = useSelector((state) => state.nfts);
  const profile = useSelector((state) => state.user);

  function handleTop() {
    const { quota } = profile;

    if (quota > 0) {
      navigate("/top");
    }

    dispatch(fetchUserAfterQuotaReduce());
  }

  useEffect(() => {
    // dispatch(getTopNFTs(true));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.collectionList}>
        <div className={styles.container}>
          <div className={styles.button}>
            <h1>Top Items Collections</h1>
            {/* <Link to="/top"> */}
            <button className={styles.btn} onClick={handleTop}>
              Enter Top Gallery
            </button>
            {/* </Link> */}
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
        </div>
      </div>
    </div>
  );
}
