import { useQueryX } from "../hooks/useQueryX";

export const withCellX =
  ({ QUERY, Loading, Error, Success, Cancelled }: any) =>
  (props: any) => {
    const { loading, data, error, cancelled, retry, refresh, cancel } =
      useQueryX(QUERY, {
        limit: 4,
        offset: 0,
      });

    if (loading) {
      return <Loading cancelFn={cancel} />;
    }
    if (error) {
      return <Error error={error} retryFn={retry} />;
    }
    if (cancelled) {
      return <Cancelled retryFn={retry} />;
    }

    return <Success refreshFn={refresh} {...data} {...props} />;
  };
