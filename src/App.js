import "./App.css";
// import Consectetur from "./Components/Consectetur";
import { LoremIpsum } from "./Components/LoremIpsum";
import Myheader from "./Components/Myheader";
import Social from "./Components/Social";

function App() {
  return (
    <div className=" overflow-hidden">
      <Myheader />
      <LoremIpsum />
      {/* <Consectetur /> */}
      <Social />
    </div>
  );
}

export default App;
