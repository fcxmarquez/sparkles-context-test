import { useGeneralContext } from "../context/generalContex";
import { memo } from "react";

function Sparkles() {
  const { sparkles } = useGeneralContext();
  const counter = sparkles;
  const sparklesArray = Array(counter).fill("✨");

  console.log("Render sparkles...");

  return <p className="Sparkles">{sparklesArray.join(" ")}</p>;
}

export default memo(Sparkles);
