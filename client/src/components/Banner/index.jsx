import styles from "./banner.module.css";

import img1 from "../../assets/banner/img-1.png";
import img2 from "../../assets/banner/img-2.png";
import img3 from "../../assets/banner/img-3.png";

export default function Banner() {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.bannerLeft}>
            <h1 className="text-indigo-600">NFT Virtual Gallery</h1>

            <p className="text-purple-400">
              CyberScape offers users a novel and engaging way to explore and
              appreciate the world of NFT art
            </p>
          </div>
          <div className={styles.bannerRight}>
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
}
