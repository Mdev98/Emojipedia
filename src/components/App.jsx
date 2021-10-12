import React from "react";
import Cards from "./Cards";
import emojiData from "../emojipedia";

function createCard(emojiData) {
  return (
    <Cards
      key={emojiData.key}
      emoji={emojiData.emoji}
      name={emojiData.name}
      meaning={emojiData.meaning}
    />
  );
}


function App(props) {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">{emojiData.map(createCard)}</dl>
    </div>
  );
}

export default App;
