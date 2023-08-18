// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { useState } from "react";

function App() {
  const [status, setStatus] = useState({});

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setStatus(data);
    } catch (error) {
      console.error("Error sending contact form:", error);
      setStatus({
        code: 500,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact onSubmit={handleSubmit} status={status} />
      <Footer />
    </div>
  );
}

export default App;
