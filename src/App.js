// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync } from "./Redux/Store/actions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementAsync())}>
        Increment after 1 second
      </button>
    </div>
  );
}

export default App;
