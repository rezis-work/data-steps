import "./Steps.css";

interface StepsProspType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Steps({ step, setStep }: StepsProspType): JSX.Element {
  function handleStepBack() {
    setStep((s) => s - 1);
  }

  function handleStepForward() {
    setStep((s) => s + 1);
  }
  return (
    <div className="step">
      <button onClick={handleStepBack} className="step-btn">
        -
      </button>
      <span className="step-text">Step: {step}</span>
      <button onClick={handleStepForward} className="step-btn">
        +
      </button>
    </div>
  );
}
