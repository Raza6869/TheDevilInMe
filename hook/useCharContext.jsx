import { CharacterContext } from "@/context/characterContext";
import { useContext } from "react";

export default function useCharContext() {
  const context = useContext(CharacterContext);

  return context;
}
