import { useContext } from "react";
import { GeneralContext } from "../context/generalContex";

export default function Sparkles() {
  const { state } = useContext(GeneralContext);
  const counter = state.sparkles;
  const sparklesArray = Array(counter).fill("✨");

  console.log("Render sparkles...");

  return <p className="Sparkles">{sparklesArray.join(" ")}</p>;
}
