import { withCellX } from "./withCellX";

export const QUERY = `
  query MyQuery($limit: Int = 3, $offset: Int = 0) {
    samuraiList(pageParams: { limit: $limit, offset: $offset }) {
      id
      name
      nickname
      age
    }
  }
`;

export const Loading = () => <p>...Loading</p>;
export const Error = ({ error, retryFn }: any) => (
  <div>
    <h4>Error</h4>
    <pre>{JSON.stringify(error, null, 2)}</pre>
    <button onClick={retryFn}>retry</button>
  </div>
);

export const Success = ({ samuraiList, refreshFn }: any) => {
  return (
    <>
      <pre>{JSON.stringify(samuraiList, null, 2)}</pre>
      <button onClick={refreshFn}>refresh</button>
    </>
  );
};

export default withCellX({ QUERY, Loading, Error, Success });
