import React from "react";
import Paragraph from "./Paragraph";
// import { dataRight } from "../data/data";

export default function RightSide({ dataRight }) {
  return (
    <div>
      <div className="name">
        <h1>Medárd Molnár</h1>
      </div>
      {dataRight &&
        dataRight.map((data) => {
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
