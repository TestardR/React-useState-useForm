import React, { useState } from 'react';
import { useForm } from './useForm';

// Only called on the first load
function expensiveInitialState() {
  return 10;
}

function App() {
  const [count, setCount] = useState(() => expensiveInitialState());
  const [{ num1, num2 }, setNum] = useState({ num1: 20, num2: 30 });

  const [values, handleChange] = useForm({ email: '', password: '' });
  return (
    <div className="App">
      <div>{count}</div>

      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        +
      </button>
      <div>{num1}</div>
      <div>{num2}</div>
      <button
        onClick={() =>
          setNum(currentState => ({
            ...currentState,
            num1: currentState.num1 + 1
          }))
        }>
        +
      </button>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
