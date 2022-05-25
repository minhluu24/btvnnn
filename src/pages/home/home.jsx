import React from "react";
import "./home.scss";
import { data } from "./data";

const Home = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="options">
          <p>
            <b>Trang chu</b>
          </p>
          <p>
            <b>San pham</b>
          </p>
          <p>
            <b>Gio hang</b>
          </p>
        </div>

        <div className="box1">
          <input type="text" placeholder="Tim Kiem" />
        </div>
      </div>

      <div className="cards">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="hinhanh">
              <img src={item.img} />
            </div>
            <div className="name">
              <h1>{item.name}</h1>
            </div>
            <div className="vnd">
              <span style={{ color: "red" }}>{item.price} VND</span>
              <span style={{ color: "green" }}>Chưa bán</span>
            </div>
          </div>
        ))}
      </div>
      <div className="hihi">
        <a href="https://www.facebook.com/ducminh2412/" target="_blank">
          {" "}
          Có gì thắc mắc Please Click{" "}
        </a>
      </div>
    </div>
  );
};

export default Home;
