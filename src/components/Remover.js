import { useGeneralDispatch } from "../context/generalContex";
import { memo } from "react";

function Remover() {
  const { removeSparkle } = useGeneralDispatch();

  const handleOnclick = () => {
    removeSparkle();
  };

  console.log("Render Remover...");

  return (
    <button className="Remover" onClick={handleOnclick}>
      Remover
    </button>
  );
}

export default memo(Remover);
