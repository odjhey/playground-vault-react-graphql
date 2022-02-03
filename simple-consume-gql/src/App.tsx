import { useQuery } from "./hooks/useQuery";

import * as Cell from "./SamuraiCell";

function App() {
  const { loading, data, error } = useQuery(Cell.QUERY, {
    limit: 4,
    offset: 0,
  });

  return (
    <div className="App">
      <h1>hello world</h1>
      {loading && <Cell.Loading />}
      {error && <Cell.Error {...error} />}
      {data && <Cell.Success {...data.data} />}
    </div>
  );
}

export default App;
