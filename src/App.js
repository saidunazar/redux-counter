import logo from "./logo.svg";
import "./App.css";
import { increment, decrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {isLogged ? (
        <>
          <h1>Redux Counter: {counter}</h1>
          <button className="increment" onClick={() => dispatch(increment(1))}>
            +
          </button>
          <button className="decrement" onClick={() => dispatch(decrement())}>
            -
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
