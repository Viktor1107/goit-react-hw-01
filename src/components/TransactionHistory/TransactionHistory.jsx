import React from "react";
import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.list}>
          <th className={styles.team}>Type</th>
          <th className={styles.team}>Amount</th>
          <th className={styles.team}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={styles.table}>{item.type}</td>
            <td className={styles.table}>{item.amount}</td>
            <td className={styles.table}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
