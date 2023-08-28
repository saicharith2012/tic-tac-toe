import { useState } from "react";

function App() {
  return (
    // The Component can return only one tag.
    <div>
      <div className="first line">
        <h1>Welcome to my app.</h1>
        <MyButton />
      </div>
      <div>
        <h2>Even Dead I'm the Hero.</h2>
        <MyButton />
      </div>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Clicked {count} times</button>;
}
export default App;
