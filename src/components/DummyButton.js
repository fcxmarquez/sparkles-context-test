import React from "react";
import { useGeneralDispatch } from "../context/generalContex";

export const DummyButton = () => {
  const { dummyAction } = useGeneralDispatch();

  console.log("Render DummyButton...");

  return <button onClick={() => dummyAction()}>DummyButton</button>;
};
