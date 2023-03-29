import { useContext } from "react";
import { ADD_SPARKLE } from "../actions/types";
import { GeneralContext } from "../context/generalContex";

export default function Adder() {
  const { dispatch } = useContext(GeneralContext);
  const handleOnclick = () => {
    dispatch({ type: ADD_SPARKLE });
  };

  console.log("Render Adder...");

  return (
    <button className="Adder" onClick={handleOnclick}>
      Agregar
    </button>
  );
}
