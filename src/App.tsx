import Companies from "./components/Companies";
import Header from "./components/Header";
import StyleApp from "./App.style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  return (
    <StyleApp className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/companies" element={<Companies />} />
          <Route path="/company/:company" element={<Company />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </StyleApp>
  );
}

export default App;
