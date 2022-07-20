import React, { Component, useEffect } from "react";
import Header from "../header/header";
import { useState } from "react";
import { Emoji } from "../model/emoji.model";

const List = () => {
  const [emojis, setEmojis] = useState([]);

  const getData = () => {
    return fetch("http://localhost:3000/emoji")
      .then((response) => response.json())
      .then((data) => setEmojis(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>

      <div>List content</div>
      {emojis.map((item: Emoji) => {
        return <span title={item.title} key={item.title}>{item.symbol}</span>;
      })}
    </>
  );
};
export default List;
