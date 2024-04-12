import { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import "./App.css";

// string
// boolean
// number
// bigInt
// symbol

// object
// array


function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Yagnesh");

  const increment = () => {
    setCounter((val) => val + 1);
  };

  // memorize function
  const testFn = useCallback(() => {
    console.log("Calling test fn");
  }, [])

  const changeName = () => {
    setName("Virat");
  };

  // Memorize your non-premitive data
  const user = useMemo(() => ({ name: 'yagnesh', age: 36 }),  []) ;

  return (
    <>
      <p>{counter}</p>
      <button type="button" onClick={increment}>
        Increment Counter
      </button>
      <p>{name}</p>
      <button type="button" onClick={changeName}>
        Change Name
      </button>

    {/* whenever you pass function as props then wrape it in usecallback */}
    {/* whenever you pass non-primitve data then use useMemo */}
      <Child user={user} testFn={testFn} />
    </>
  );
}

export default App;
