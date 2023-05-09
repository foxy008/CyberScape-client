import styles from "./collectionlist.module.css";
import CollectionCard from "../CollectionCard";
import { useNavigate } from "react-router-dom";
import { fetchUserAfterQuotaReduce } from "../../actions/usersCreators";
import { useDispatch, useSelector } from "react-redux";

export default function CollectionList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user);

  function handleTop() {
    const { quota } = profile;

    if (quota > 0) {
      navigate('/top')
    }

    dispatch(fetchUserAfterQuotaReduce())
  }

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
