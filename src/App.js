import "./App.css";
import Listen from "./Components/Listen";
import Our from "./Components/Our";
// import Myheader from "./Components/Myheader";
import Social from "./Components/Social";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Myfooter from "./Components/Myfooter";

function App() {
  return (
    < div className=" overflow-hidden">
      {/* <Myheader /> */}
      <Social />
      <Our/>
      <Listen/>
      <Myfooter/>
    </div>
  );
}

export default App;
