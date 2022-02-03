export async function customFetch(
  query: string,
  variables: Record<string, any> = {}
): Promise<any> {
  const response = await fetch("http://localhost:3003/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return response.json();
}
