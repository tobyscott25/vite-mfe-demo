import { FunctionComponent, useState } from "react";

export const CounterButton: FunctionComponent = (): JSX.Element => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={() => setState((s) => s + 1)}>
        Counter button: {state}
      </button>
    </div>
  );
};

export default CounterButton;
