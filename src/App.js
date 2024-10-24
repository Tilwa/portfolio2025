import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Main Home Route */}
          <Route path="/*" element={<Home />} />

          {/* Error Route for any unmatched paths */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
