import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import h from "../helpers";

const useStyles = makeStyles(() => ({
  sidebarParent: {
    backgroundColor: "#f4f4f4",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    padding: "10px"
  },
  link: {
    padding: "0 20px",
    cursor: "pointer",
    height: "36px",
    lineHeight: "36px",
    transition: "all 600ms",
    borderRadius: "100px",
    background: "transparent",
    display: "grid",
    gridTemplateColumns: "40px 1fr",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#e9e9e9",
      color: "#000"
    }
  },
  linkText: {

  },
  linkIcon: {
    width: "26px",
    height: "26px",
    opacity: .6
  },
  activeLink: {

  }
}));

const entries = {
  "me": {
    name: "Me",
    icon: "glyphicons-user.svg",
    action: () => h.Vent.emit("link", "me")
  },
  "build": {
    name: "Build",
    icon: "glyphicons-claw-hammer.svg"
  },
  "code": {
    name: "Code",
    icon: "glyphicons-code.svg"
  },
  "https://www.goodreads.com/review/list/69303468": {
    name: "Books",
    icon: "glyphicons-book.svg"
  },
  "https://github.com/int13h": {
    name: "Github",
    icon: "github.svg"
  },
  "https://twitter.com/7061756c0d": {
    name: "Twitter",
    icon: "twitter.svg"
  }
};

export default withRouter(function SideBar(props) {
  const classes = useStyles();
  const sidebarContent = Object.keys(entries).map((key) => {
    const entry = entries[key];
    const action = entry.hasOwnProperty("action")

    return (
      <div
        key={entry.name}
        className={classes.link}
        onClick={entry.action}
      >
        <img
          className={classes.linkIcon}
          src={`./images/${entry.icon}`}
          alt={entry.name}
        />
        <span 
          className={classes.linkText}
        >
          {entry.name}
        </span>
      </div>
    );
  });

  return (
    <div className={classes.sidebarParent}>
      {sidebarContent}
    </div>
  );
});
