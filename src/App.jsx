import React, { useState } from "react";
import Stat from "./components/Stat";
import "./App.css";

const App = () => {
  const [mana, setMana] = useState(0);
  const [health, setHealth] = useState(0);
  const [damage, setDamage] = useState(0);

  const resetAll = () => {
    setMana(0);
    setHealth(0);
    setDamage(0);
  };

  return (
    <div className="App center-column">
      <h1>Shards Companion!</h1>
      <Stat name="Mana" imgURL="/mana.png" value={mana} setValue={setMana} />
      <Stat
        name="Health"
        imgURL="/health.png"
        value={health}
        setValue={setHealth}
      />
      <Stat
        name="Damage"
        imgURL="/damage.png"
        value={damage}
        setValue={setDamage}
      />
      <div>
        <button onClick={resetAll}>Reset all</button>
      </div>
    </div>
  );
};

export default App;
