import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import WhyScreen from "./screens/WhyScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact-me" element={<ContactScreen />} />
        <Route path="/why-shelly" element={<WhyScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
