import {
  AccountBalance,
  KeyboardArrowUp,
  MonetizationOn,
  PersonOutline,
  ShoppingCart,
} from "@mui/icons-material";
import "./widget.scss";
import React from "react";

const Widget = ({ type }) => {
  let data;
  const amount = Math.floor(Math.random() * 100);
  const diff = Math.floor(Math.random() * 100);
  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutline
            className="icon"
            style={{ backgroundColor: "#FFD700" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCart className="icon" style={{ backgroundColor: "#7CB9E8" }} />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "View net earning",
        icon: (
          <MonetizationOn
            className="icon"
            style={{ backgroundColor: "#32de84" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalance className="icon" style={{ backgroundColor: "#FF033E" }} />
        ),
      };
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
          {}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          {diff}
          <KeyboardArrowUp />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
