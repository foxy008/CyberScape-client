import styles from "./favoritelist.module.css";
import CollectionCard from "../CollectionCard";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserAfterQuotaReduce } from "../../actions/usersCreators";
import { useDispatch } from "react-redux";

export default function CollectionList() {
  const arr = [1,1,1,1,1,1,1,1,11,1]
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
                  />
                  </div> 
                  </>
                )
              })}
            </div>                
            </div>
          </div>
        </div>
    </>
  );
}
