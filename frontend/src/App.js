import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CoursePage from "./pages/CoursePage";

function App() {
  useEffect(() => {
    // Load Inter font dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/curso/medicina-veterinaria" replace />} />
          <Route path="/curso/:slug" element={<CoursePage />} />
          <Route path="*" element={<Navigate to="/curso/medicina-veterinaria" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
