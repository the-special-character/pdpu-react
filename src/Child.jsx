import { memo } from "react";

const Child = ({ user, testFn }) => {
  console.log("Child Component render");
  return (
    <div>
      <p>Child</p>
      <button onClick={testFn}>Click Test Function</button>
    </div>
  );
};

// compare prevProps and nextProps
// on diifrence they rerender component
export default memo(Child);

// export default memo(Child, (prevProps, nextProps) => {
//   return prevProps.name === nextProps.name;
// });
