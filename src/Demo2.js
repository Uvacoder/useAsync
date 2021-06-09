import React from "react";
import useAsync from "./Hooks/useAsync";
import AsyncWrapper from "./AsyncWrapper/AsyncWrapper";

const myFunction = () => {
  return fetch("http://swapi.dev/api/people/1/");
};

function App() {
  const { status, value } = useAsync(myFunction);

  return (
    <div className="App">
      <h1>MOS demo</h1>
      <AsyncWrapper status={status}>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </AsyncWrapper>
    </div>
  );
}
export default App;
