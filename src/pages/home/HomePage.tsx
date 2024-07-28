import {useState} from "react";
import {Button} from "../../components/ui/button";

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
      <>
        <h1>
          Hello world!
        </h1>
        <Button onClick={() => setCount(count + 1)}>Easy</Button>
        <header>Home</header>
        <div>Thanks for visiting our site.</div>
      </>
  )
}

export {HomePage};