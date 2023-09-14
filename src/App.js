import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [fontColor, setfontColor] = useState("dark");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setfontColor("light");
      document.body.style.backgroundColor = "#252557";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      setfontColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils2"
        about="About"
        mode={mode}
        enableMode={toggleMode}
        fontColor={fontColor}
      />
      <Alert alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Text Here"
                mode={mode}
                fontColor={fontColor}
                showAlert={showAlert}
              ></TextForm>
            }
          />
          <Route path="about" element={<About></About>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
