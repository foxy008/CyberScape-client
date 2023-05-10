import React, { useEffect } from "react";
import styles from "./recentcollection.module.css";
import CollectionCard from "@/components/CollectionCard";
import { Link } from "react-router-dom";
import { getAllRooms } from "@/actions/roomsCreators";
import { useDispatch, useSelector } from "react-redux";

export default function RecentCollection() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);

  useEffect(() => {
    // dispatch(getAllRooms());
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.recentCollection}>
        <div className={styles.container}>
          <div className={styles.button}>
            <h1>Recent Artist Collections</h1>
            <button className={styles.btn}>
              <Link to="/gallery">Enter Artist Gallery</Link>
            </button>
          </div>
        </div>
        <div className={styles.cards}>
          {rooms.map((room) => (
            <CollectionCard
              imageUrl={room.Artist.avatarUrl}
              title={room.Artist.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
