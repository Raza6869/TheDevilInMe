//next imports
import { createContext, useState } from "react";

//data
import { data } from "@/data/charcompdb";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [index, setIndex] = useState();
  const char = data[index];

  const indexTogle = () => setIndex(state > 4 ? 0 : state + 1);

  return (
    <CharacterContext.Provider value={(indexTogle, char, data)}>
      {children}
    </CharacterContext.Provider>
  );
};
