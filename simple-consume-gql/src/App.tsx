import { useQuery } from "./hooks/useQuery";

const QUERY = `
        query {
          samuraiList {
            id
            nameasdf
            nickname
            age
          }
        }
      `;

function App() {
  const { loading, data, error } = useQuery(QUERY, {});

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
