import React from "react";
import "./sider.css";

const sider = () => {
  return (
    <>
      <div className="Dashboard">
        <h2>ACME</h2>
        <ul>
          <li><ion-icon name="home-outline"></ion-icon> Home</li>
          <li><ion-icon name="grid-outline"></ion-icon> Dashboard</li>
          <li><ion-icon name="chatbox-outline"></ion-icon> Inbox</li>
          <li><ion-icon name="reader-outline"></ion-icon> Products</li>
          <li><ion-icon name="settings-outline"></ion-icon> Admin</li>
        </ul>
      </div>
    </>
  );
};

export default sider;
