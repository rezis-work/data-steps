import "./Steps.css";

interface StepsProspType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Steps({ step, setStep }: StepsProspType): JSX.Element {
  function handleSteps(e: React.ChangeEvent<HTMLInputElement>) {
    setStep(+e.target.value);
  }
  return (
    <div className="step">
      <span className="step-text">
        <input
          onChange={handleSteps}
          type="range"
          min="0"
          max="10"
          value={step}
        />{" "}
        {step}
      </span>
    </div>
  );
}
