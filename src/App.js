import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FindWork from "./Pages/FindWork";
import ClientSolutions from "./Pages/ClientSolutions";
import ContactUs from "./Pages/ContactUs";
import CAPrivacyPolicy from "./Pages/CAPrivacyPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/FindWork" element={<FindWork />} />
      <Route path="/ClientSolutions" element={<ClientSolutions />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/CAPrivacyPolicy" element={<CAPrivacyPolicy />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
