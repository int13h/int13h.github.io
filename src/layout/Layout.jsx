import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./SideBar";
import h from "../helpers";
import _ from "lodash";

const useStyles = makeStyles(() => ({
  contentParent: {
    borderRadius: "10px",
    border: "1px solid #e9e9e9",
    position: "fixed",
    top: "20px",
    left: "20px",
    bottom: "20px",
    right: "20px",
    border: "1px solid #d4d4d4",
    boxShadow: "0 2px 4px rgba(0,0,0,.1)",
    backgroundColor: "#ffffff",
    display: "grid",
    gridTemplateColumns: "150px 1fr"
  },
  content: {
    padding: "20px"
  }
}));

export default function Layout(props) {
 useEffect(() => {
   h.Vent.addListener("link", (link) => {
      props.history.push(link);
   });

   console.log(props)
   h.Vent.emit("link", _.get(props, "match.params.page", "me"));

    return function cleanup() {
     h.Vent.removeAllListeners("link");
    };
  });

  const classes = useStyles();

  return (
    <div className={classes.contentParent}>
      <SideBar />
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

