import React from "react";
import useAsync from "./Hooks/useAsync";

const myFunction = () => {
  return fetch("http://swapi.dev/api/people/1/");
};
function App() {
  const { status, error, value } = useAsync(myFunction);

  //   const [isLoading, setLoading] = useState(false);
  //   const [isError, setError] = useState(false);
  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setError(false);
  //       setLoading(true);
  //       try {
  //         const response = await fetch("http://swapi.dev/api/people/1/") ;
  //         const data = await response.json();
  //         setData(data);
  //       } catch (error) {
  //         setError(true);
  //       }
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, []);
  return (
    <div className="App">
      <h1>MOS demo</h1>

      {status === "loading" && <div>Loading....</div>}
      {status === "success" && (
        <div>
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </div>
      )}
      {status === "error" && <div>{error.toString()}</div>}
    </div>
  );
}
export default App;
