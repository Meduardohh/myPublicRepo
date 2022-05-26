import React from "react";
import { useState, useEffect } from "react";

export default function Profile() {
  const [data, setData] = useState(null);


  useEffect(() => {
    async function getData() {
        const dataBack = await fetch("https://randomuser.me/api/");
        const finalData = await dataBack.json();
        setData(finalData);
        return finalData;
      }
    
    getData().then((data) => console.log(data));
  }, []);

  return (
    <div>
      {data && (
        <div>
          {`${data?.results[0].name.first} ${data?.results[0].name.last}`}
          <br />
          <img alt="szar" src={data?.results[0].picture.medium} />
        </div>
      )}
    </div>
  );
}
