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
export const Error = (e: any) => (
  <div>
    <h4>Error</h4>
    <pre>{JSON.stringify(e, null, 2)}</pre>
  </div>
);

export const Success = ({ samuraiList }: any) => {
  return <pre>{JSON.stringify(samuraiList, null, 2)}</pre>;
};
