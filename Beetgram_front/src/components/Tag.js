import React, { useContext } from "react";
import contactContext from "../context/contact/contactContext";

const Tag = React.memo(function Tag({ tag }) {
  const ContactContext = useContext(contactContext);
  const { toggleTagged } = ContactContext;
  return (
    <div>
      <b
        style={{
          cursor: "default",
          color: tag.active ? "green" : "black",
        }}
        onClick={() => {
          toggleTagged(tag.tag_no);
        }}
      >
        {tag.tag_han}
      </b>
    </div>
  );
});

function TagList({ tags }) {
  console.log("Tag");
  return (
    <div>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.tag_no} />
      ))}
    </div>
  );
}

export default React.memo(TagList);
