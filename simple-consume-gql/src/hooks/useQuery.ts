import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";

export const useQuery = (query: string, variables: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    customFetch(query, variables)
      .then((d) => setData(d))
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      });
  }, [query, variables]);

  return { loading, data, error };
};
