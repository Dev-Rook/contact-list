import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles Import:
import "./App.css";

// Components Import:

// Routes Import:
import Index from "./routes/Index";

// Dynamic Routes:
import Profile from "./dynamic-routes/Profile";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
