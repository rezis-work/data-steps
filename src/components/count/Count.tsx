import "./Count.css";

interface CountPropsTypes {
  count: number;
  step: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Count({
  count,
  step,
  setCount,
}: CountPropsTypes): JSX.Element {
  function handleCountBack() {
    setCount((s) => s - step);
  }
  function handleCountForward() {
    setCount((s) => s + step);
  }
  return (
    <div className="count">
      <button onClick={handleCountBack} className="count-btn">
        -
      </button>
      <span className="count-text">Count: {count}</span>
      <button onClick={handleCountForward} className="count-btn">
        +
      </button>
    </div>
  );
}
