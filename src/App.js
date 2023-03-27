import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import SelectedVideo from "./pages/SelectedVideo";
import UploadVideo from './pages/UploadVideo';
const App = () => {
  return (
  <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
         <Route path=":id" element={<SelectedVideo />}></Route>
        <Route path="/upload" element={<UploadVideo />}></Route> 
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
