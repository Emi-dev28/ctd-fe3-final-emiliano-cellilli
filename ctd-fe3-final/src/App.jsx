import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./Styles/content.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Context from "./components/utils/context";
import Details from "./Routes/Details"

function App() {
  return (
    <Context>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/favs' element={<Favs/>} />
          <Route path='/details/:id'element={<Details/>} />
        </Routes>
        <Footer />
      </div>
    </Context>
  );
}

export default App;
