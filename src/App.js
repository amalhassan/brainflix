import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import SelectedVideo from "./pages/SelectedVideo";
import NotFound from "./pages/NotFound";
function App() {
  return (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path=":id" element={<SelectedVideo />}></Route>
        <Route path="*" element={< NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
