import { useQueryX } from "../hooks/useQueryX";

export const withCellX =
  ({ QUERY, Loading, Error, Success }: any) =>
  (props: any) => {
    const { loading, data, error, retry, refresh } = useQueryX(QUERY, {
      limit: 4,
      offset: 0,
    });

    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error error={error} retryFn={retry} />;
    }

    return <Success refreshFn={refresh} {...data} {...props} />;
  };
