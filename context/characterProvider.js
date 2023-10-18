//next imports
import { useState } from "react";

//context
import { CharacterContext } from "./characterContext";

export default function CharacterProvider({ children }) {
  const [index, setIndex] = useState(1);

  const indexTogle = () => setIndex(index >= 4 ? 0 : index + 1);
  const lastIndexTogle = () => setIndex(index <= 0 ? 4 : index - 1);

  return (
    <CharacterContext.Provider value={{ indexTogle, lastIndexTogle, index }}>
      {children}
    </CharacterContext.Provider>
  );
}
