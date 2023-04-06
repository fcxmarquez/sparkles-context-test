import Sparkles from "./components/Sparkles";
import Adder from "./components/Adder";
import Remover from "./components/Remover";
import { DummyButton } from "./components/DummyButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Context vs. Redux</h1>
      <section>
        <Sparkles />
      </section>
      <section>
        <Adder />
        <Remover />
      </section>
      <section>
        <DummyButton />
      </section>
    </div>
  );
}
