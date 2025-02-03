import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<Navigate to="/portfolio2025" replace />} />
          <Route path="/portfolio2025/*" element={<Home />} />

          {/* Error Route for any unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
