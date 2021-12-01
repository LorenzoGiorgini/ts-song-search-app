import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SongDetails from './views/SongDetails';
import Home from './views/Home';

function App() {


  return (
    <div>
      <Router>
        <Route  path="/" element={<Home />} />
        <Route  path="/details/:id" element={<SongDetails />} />
      </Router>
    </div>
  );
}


export default App;