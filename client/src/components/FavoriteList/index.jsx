import styles from "./favoritelist.module.css";
import CollectionCard from "../CollectionCard";
import { fetchUserAfterUnfavorited } from "../../actions/usersCreators";
import { useDispatch, useSelector } from "react-redux";
import ShareButtons from "@/components/ShareButtons";

export default function CollectionList() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const profile = useSelector(state => state.user);
  const { UserFavorites } = profile

  const dispatch = useDispatch();

  function handleUnfavorite(id) {
      dispatch(fetchUserAfterUnfavorited(id))
  }

  if (UserFavorites) return (
    <>
      {/* { console.log(UserFavorites) } */}
      <div className={styles.favoriteList}>
        <div className={styles.container}>
          <div>
            <h1> My Favorite Collections</h1>
          </div>
          <div className={styles.cards}>
            <div className="carousel carousel-end rounded-box">
              { UserFavorites.map(el => {
                const { NFT } = el;
                return (
                  <>
                    {/* { console.log(NFT, '<- di dalam mapping nft')} */}
                    <div className="carousel-item ml-10">
                      <CollectionCard
                        imageUrl={ NFT.imageUrl }
                        title={ NFT.title }
                        action={
                          <>
                            <ShareButtons
                              title={ `Check out this ${NFT.title} picture! Only in the https://cyberscape-p3.web.app` }
                              url={ NFT.imageUrl }
                            />
                            <div className={styles.button}>
                              <button
                                className={styles.btn}
                                onClick={() => handleUnfavorite(NFT.id)}>
                                  Unfavorite
                              </button>
                          </div>
                          </>
                        }
                        id={ NFT.id }
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
