import invariant from "tiny-invariant";

console.clear();

const db = [
  { id: 1, unitName: "skyun" },
  { id: 2, unitName: "Ph1" },
];

function readData(id): { ok: true; data: any } | { ok: false; error: any } {
  const unit = db.find((u) => u.id === id);
  if (unit) {
    return { ok: true, data: unit };
  }
  return { ok: false, error: "No unit." };
}

function main() {
  // no error (due to type narrowing)
  const a = readData(1);
  invariant(a.ok, "Not found");
  console.log(a.data);

  // UNCOMMENT below blocks to see errors

  /* // compile error, `data` does not exist (may not exist)
  const b = readData(1);
  console.log(b.data);
  */

  /* // no error
  const c = readData(1);
  if (c.ok) {
    console.log(c.data);
  }
  */

  /* // ERROR
  const c = readData(1);
  if (c.ok) {
  }
  console.log(c.data);
  */
}

main();

console.log("-- end --");
