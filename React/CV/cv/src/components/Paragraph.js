import React from "react";

export default function Paragraph({ title, content }) {
  return (
    <div className="paragraph">
      <h4 className="paragraph-header">{title}</h4>
      {/* <p className="paragraph-paragraph">{content}</p> */}
      <ul>
        {content.map((data) => {
          return <li key={`key_${data}`}>{data}</li>;
        })}
      </ul>
    </div>
  );
}
