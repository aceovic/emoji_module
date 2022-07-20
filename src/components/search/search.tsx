import React, { Component, useEffect, useState } from "react";
import { Emoji } from "../model/emoji.model";

const Search = () => {
  const [text, setText] = useState("");
  const [currentEmoji, setCurrentEmoji] = useState([]);
  const [emojiList, setEmojiList] = useState([]);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
    // filtre emoji
    const result = emojiList.filter((emo: Emoji) =>
      emo.keywords.toLowerCase().includes(text.toLowerCase())
    );
    setCurrentEmoji(result);
  };

  const getData = async () => {
    const response = await fetch("http://localhost:3000/emoji");
    const data = await response.json();
    setEmojiList(data);
  };

  useEffect(() => {
    getData();
    console.log("executed only once!");
  }, [""]);

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <h2>Hey</h2>
      <div>
        {currentEmoji.map((item: Emoji) => {
          return (
            <span title={item.title} key={item.title}>
              {item.symbol}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Search;
