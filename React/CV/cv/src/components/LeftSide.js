import React from "react";
// import { dataLeft } from "../data/data";
import Paragraph from "./Paragraph";

export default function LeftSide({ dataLeft }) {
  return (
    <div>
      <img
        alt="nincskep"
        className="profilePicture"
        src="https://placedog.net/300/300"
      />
      {dataLeft&&dataLeft.map((data) => {
        let title, content;
        [title, ...content] = [...data];
        // console.log(title, content);
        return (
          <Paragraph key={`title:${title}`} title={title} content={content} />
        );
      })}
    </div>
  );
}
