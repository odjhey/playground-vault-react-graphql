import { withCellX } from "./withCellX";

export const QUERY = `
  query MyQuery($limit: Int = 3, $offset: Int = 0) {
    longSamuraiList(pageParams: { limit: $limit, offset: $offset }) {
      id
      name
      nickname
      age
    }
  }
`;

export const Loading = ({ cancelFn }: any) => (
  <>
    <p>...Loading</p>
    <button onClick={cancelFn}>cancel</button>
  </>
);

export const Error = ({ error, retryFn }: any) => (
  <div>
    <h4>Error</h4>
    <pre>{JSON.stringify(error, null, 2)}</pre>
    <button onClick={retryFn}>retry</button>
  </div>
);

export const Cancelled = ({ error, retryFn }: any) => (
  <div>
    <h4>Cancelled</h4>
    <button onClick={retryFn}>retry</button>
  </div>
);

export const Success = ({ longSamuraiList, refreshFn }: any) => {
  return (
    <>
      <pre>{JSON.stringify(longSamuraiList, null, 2)}</pre>
      <button onClick={refreshFn}>refresh</button>
    </>
  );
};

export default withCellX({ QUERY, Loading, Error, Success, Cancelled });
