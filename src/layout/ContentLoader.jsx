import React from "react";
import _ from "lodash";

export default function ContentLoader(props) {

  console.log(props)
  return (
    <div>{props.match.params.page}</div>
  );
};
