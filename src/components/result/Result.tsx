import "./Result.css";

interface ResultPropsTypes {
  count: number;
}

export default function Result({ count }: ResultPropsTypes): JSX.Element {
  const today = new Date();
  today.setDate(today.getDate() + count);
  const weekday = today.toLocaleDateString("en-US", { weekday: "short" });
  const month = today.toLocaleDateString("en-US", { month: "short" });
  const day = today.getDate();
  const year = today.getFullYear();
  return (
    <div className="results">
      <p>
        {count >= 0
          ? `${count} days from Today is ${weekday} ${month} ${day} ${year}`
          : `${count} days before Today is ${weekday} ${month} ${day} ${year}`}
      </p>
    </div>
  );
}
