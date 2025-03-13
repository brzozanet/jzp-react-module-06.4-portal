import { useState } from "react";
import "./App.css";
import { Main } from "./components/Main/Main";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <>
      <h1>Witaj w lekcji o React Portal!</h1>
      <Main setIsModalShown={setIsModalShown} />
      <footer>zrozumiecReact.pl ©</footer>
      {isModalShown && <Modal setIsModalShown={setIsModalShown} />}
    </>
  );
}

export default App;
