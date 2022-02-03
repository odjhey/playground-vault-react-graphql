import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";

export const useQuery = (query: string, variables: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ data: any }>();
  const [error, setError] = useState();

  useEffect(() => {
    customFetch(query, variables)
      .then((d) => {
        if (d.errors) {
          throw d.errors;
        }
        setData(d);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
};
