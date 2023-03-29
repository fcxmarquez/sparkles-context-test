import { useContext } from "react";
import { REMOVE_SPARKLE } from "../actions/types";
import { GeneralContext } from "../context/generalContex";

export default function Remover() {
  const { dispatch } = useContext(GeneralContext);

  const handleOnclick = () => {
    dispatch({ type: REMOVE_SPARKLE });
  };

  console.log("Render Remover...");

  return (
    <button className="Remover" onClick={handleOnclick}>
      Remover
    </button>
  );
}
