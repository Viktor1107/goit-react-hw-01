import React from "react";
import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, status }) {
  return (
    <div className={styles.friend}>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={status ? styles.online : styles.offline}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
}
