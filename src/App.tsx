// App.tsx
import BurgerMenu from "./components/BurgerMenu";
import { Main } from "./components/Main";
import { Portfolio } from "./components/Portfolio"; // Importe o componente Portfolio
import "./styles/index.css";

function App() {
  return (
    <>
      <Main />
      <Portfolio />
      <BurgerMenu />
    </>
  );
}

export default App;
