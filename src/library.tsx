import { useState } from "react";
function Library() {
  const [name, setName] = useState("");
  const myLibrary = () => {
    setName("Hanuman Library");
  };
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={myLibrary}>My library</button>
    </div>
  );
}
export default Library;
