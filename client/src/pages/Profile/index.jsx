import styles from "./profile.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../actions/usersCreators";
import { redirect } from "react-router-dom";
import GalaxyBackground from "../../components/GalaxyBackground";
import FavoriteList from "../../components/FavoriteList";

export default function Profile() {
  const profile = useSelector((state) => state.user);

  if (profile)
    return (
      <>
        {/* {console.log(profile)} */}
        <GalaxyBackground>
          <div className={styles.wrapper}>
            <div className={styles.profile}>
              <div className={styles.container}>
                <div className="flex ml-[70px] mt-20">
                  <img
                    className="h-[80px] w-[80px] rounded-full"
                    src="https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png"
                    alt=""
                  />
                  <div className="flex flex-col text-cyan-100 self-center ml-4">
                    <p className="text-2xl text-fuchsia-300">
                      {`${profile.firstName} ${profile.lastName}`}
                    </p>
                    <p className="text-fuchsia-300">{profile.email}</p>
                    <p className="text-green-400">Credit : {profile.quota}</p>
                  </div>
                </div>
                <FavoriteList />
              </div>
            </div>
          </div>
        </GalaxyBackground>
      </>
    );
}
