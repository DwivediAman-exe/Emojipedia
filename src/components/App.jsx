import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia.js";

function createCard(emoji){
  return (
    <Card 
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );

}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );

}

export default App;
