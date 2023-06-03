import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles Import:
import "./App.css";

// Components Import:

// Routes Import:
import Index from "./routes/Index";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
