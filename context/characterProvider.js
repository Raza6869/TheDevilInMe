//next imports
import { useState } from "react";
//context
import { CharacterContext } from "./characterContext";

export default function CharacterProvider({ children }) {
  const [index, setIndex] = useState(0);

  const indexTogle = () => setIndex(state > 4 ? 0 : state + 1);

  return (
    <CharacterContext.Provider value={{ indexTogle, index }}>
      {children}
    </CharacterContext.Provider>
  );
}
