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
    dispatch(getAllRooms());
  }, []);

  return (
    <div className={styles.recentCollection}>
      <div className={styles.container}>
        <div>
          <h1>Recent Collection</h1>
        </div>
        <div className={styles.cards}>
          {rooms.map((room) => (
            <CollectionCard
            imageUrl={room.imageUrl}
            title={room.title}
            description={room.description}
          />
          ))}
        </div>
        <div className={styles.button}>
          <button className={styles.btn}>
            <Link to="/gallery">Enter Recent Gallery</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
