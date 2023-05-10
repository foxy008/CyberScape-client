import styles from "./favoritelist.module.css";
import CollectionCard from "../CollectionCard";
import { fetchUserAfterQuotaReduce } from "../../actions/usersCreators";
import { useDispatch, useSelector } from "react-redux";
import ShareButtons from "@/components/ShareButtons";

export default function CollectionList() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const profile = useSelector(state => state.user);

  return (
    <>
      <div className={styles.favoriteList}>
        <div className={styles.container}>
          <div>
            <h1> My Favorite Collections</h1>
          </div>
          <div className={styles.cards}>
            <div className="carousel carousel-end rounded-box">
              {arr.map((el) => {
                return (
                  <>
                    <div className="carousel-item ml-10">
                      <CollectionCard
                        imageUrl="https://via.placeholder.com/200"
                        title="NFT 1"
                        action={
                          <>
                            <ShareButtons
                              title="Ini NFT 1"
                              url="https://google.com/nft1"
                            />

                            <div className={styles.button}>
                              <button className={styles.btn}>Delete</button>
                            </div>
                          </>
                        }
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
