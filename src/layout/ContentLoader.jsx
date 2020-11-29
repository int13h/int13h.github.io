import React from "react";
import _ from "lodash";

export default function ContentLoader(props) {
  const path = _.get(props, "match.params.page", "test");
  return (
    <div>{path}</div>
  );
};
