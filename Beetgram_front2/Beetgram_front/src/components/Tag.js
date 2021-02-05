import React, { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { API_BASE_URL } from "../index";
import { tagDispatch } from "./App";

const Tag = React.memo(function Tag({ tag }) {
  const dispatch = useContext(tagDispatch);
  return (
    <div>
      <b
        style={{
          cursor: "default",
          color: tag.active ? "green" : "black",
        }}
        onClick={() => {
          dispatch({ type: "TAGGED", tag_no: tag.tag_no });
        }}
      >
        {tag.tag_han}
      </b>
    </div>
  );
});

function TagList({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.tag_no} />
      ))}
    </div>
  );
}

export default React.memo(TagList);
