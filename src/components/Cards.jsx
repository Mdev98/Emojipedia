import React from "react";
import Emoji from "./Emoji";
import Meaning from "./Meaning";
import Title from "./Title";

function Cards(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />
        <Title title={props.name} />
      </dt>
      <Meaning content={props.meaning} />
    </div>
  );
}

export default Cards;
