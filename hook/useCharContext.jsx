//next imports
import { useContext } from "react";

//context
import { CharacterContext } from "@/context/characterContext";

export default function useCharContext() {
  const context = useContext(CharacterContext);

  return context;
}
