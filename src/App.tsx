import { useState } from "react";
import "./App.css";
import Steps from "./components/steps/Steps";
import Count from "./components/count/Count";
import Result from "./components/result/Result";

function App(): JSX.Element {
  const [step, setStep] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <Steps step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} step={step} />
      <Result count={count} />
    </div>
  );
}

export default App;
