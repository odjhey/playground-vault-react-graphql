import { useEffect, useState } from "react";
import { customFetch } from "./utils/customFetch";

function App() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    customFetch(
      `
        query {
          samuraiList {
            id
            name
            nickname
            age
          }
        }
      `,
      {}
    )
      .then((d) => {
        setData(d);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
