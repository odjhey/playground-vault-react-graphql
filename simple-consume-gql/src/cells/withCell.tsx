import { useQuery } from "../hooks/useQuery";

export const withCell =
  ({ QUERY, Loading, Error, Success }: any) =>
  (props: any) => {
    const { loading, data, error } = useQuery(QUERY, {
      limit: 4,
      offset: 0,
    });

    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error {...error} />;
    }

    return <Success {...data?.data} {...props} />;
  };
