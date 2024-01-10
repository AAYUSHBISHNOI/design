import "./App.css";
import Listen from "./Components/Listen";
import Our from "./Components/Our";

import BackToTop from "./Components/BackToTop";
import { LoremIpsum } from "./Components/LoremIpsum";
import Social from "./Components/Social";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Myfooter from "./Components/Myfooter";
import Myheader from "./Components/Myheader";
import Consectetur from "./Components/Consectetur";

function App() {
  return (
    < div className=" overflow-hidden">
      <BackToTop />
      <Myheader/>
      <LoremIpsum />
      <Consectetur/>
      <Social />
      <Our/>
      <Listen/>
      <Myfooter/>
    </div>
  );
}

export default App;
