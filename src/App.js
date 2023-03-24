import './App.css';
import { Routes, Route } from "react-router-dom";
import Welcome from './Welcome';
import TableData from './TableData';
import WebSiteTracking from './WebSiteTracking';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome  />} />
        <Route path="table" element={<TableData  />} />
        <Route path="/websitetracking" element={<WebSiteTracking  />} />
      </Routes>
    </div>
  );
}

export default App;
