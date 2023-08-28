import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    // The Component can return only one tag.
    <div>
      <div className="first line">
        <h1>Welcome to my app.</h1>
        <MyButton count={count} onClick={handleClick} />
      </div>
      <div>
        <h2>Even Dead I'm the Hero.</h2>
        <MyButton count={count} onClick={handleClick} />
      </div>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
export default App;
