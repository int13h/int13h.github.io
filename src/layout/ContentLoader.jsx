import React from "react";
import _ from "lodash";

export default function ContentLoader(props) {
  return (
    <div>{props.match.params.page}</div>
  );
};
