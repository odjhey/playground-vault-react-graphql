import { useQuery } from "./hooks/useQuery";

const QUERY = `
  query MyQuery($limit: Int = 3, $offset: Int = 0) {
    samuraiList(pageParams: { limit: $limit, offset: $offset }) {
      id
      name
      nickname
      age
    }
  }
`;

function App() {
  const { loading, data, error } = useQuery(QUERY, { limit: 4, offset: 0 });

  return (
    <div className="App">
      <h1>hello world</h1>
      <h3>{loading ? "loading" : null}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}

export default App;
