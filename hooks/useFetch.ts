import { useEffect, useState } from "react";

const useFetch = <T>(fecthFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fecthFunction();

      setData(res);
    } catch (error) {
      setError(error instanceof Error ? error : new Error("An error ocurred"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return { data, loading, error, refefetch: fetchData, reset };
};

export default useFetch;
