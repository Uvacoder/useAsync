import { useEffect, useState, useCallback } from "react";

const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(
    (...rest) => {
      setStatus("pending");
      setValue(null);
      setError(null);

      return asyncFunction(...rest)
        .then((response) => response.json())
        .then(data=>{
          setValue(data);
          setStatus("success");
        })
        .catch((err) => {
          console.log("🚀 ~ file: useAsync.js ~ line 25 ~ useAsync ~ err", err)
          setError(err);
          setStatus("error");
        });
    },
    [asyncFunction]
  );

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export default useAsync;
