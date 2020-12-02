import React from "react";
import _ from "lodash";
import ReactMarkdown from "react-markdown";

const fetchPage = (params) => {
  const headers = {
    "Accept": "text/plain",
    "Content-type": "text/plain"
  };

  let options = {
    method: "GET",
    headers
  };

  const actions = {
    validate: async function(response) {
      if (!response.ok) {
        response.responseJSON = await response.text();
        throw response;
      }
      return response;
    },
    convert: (response) => {
      return response.text();
    },
    success: (result) => {
      if (typeof params.success === "function") {
        return params.success(result);
      }
    },
    error: (error) => {
      if (typeof params.error === "function") {
        return params.error(error);
      }
    }
  };

  fetch("./content/me.md", options)
    .then(actions.validate)
    .then(actions.convert)
    .then(actions.success)
    .catch(actions.error);
}

export default function ContentLoader(props) {
  console.log(props)
  const path = _.get(props, "match.params.page", "test");

  return (
    <ReactMarkdown
      className="markdown-body"
      source={fetchPage()}
    />
  );
};
