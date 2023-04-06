import { useGeneralDispatch } from "../context/generalContex";
import { memo } from "react";

function Adder() {
  const { addSparkle } = useGeneralDispatch();
  const handleOnclick = () => {
    addSparkle();
  };

  console.log("Render Adder...");

  return (
    <button className="Adder" onClick={handleOnclick}>
      Agregar
    </button>
  );
}

export default memo(Adder);
