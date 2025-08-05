import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FindWork from "./Pages/FindWork";
import ClientSolutions from "./Pages/ClientSolutions";
import ContactUs from "./Pages/ContactUs";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/FindWork" element={<FindWork />} />
      <Route path="/ClientSolutions" element={<ClientSolutions />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
