import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SongDetails from "./views/SongDetails";
import Home from "./views/Home";
import TopBar from "./components/TopBar";
import { useEffect, useState } from "react";
import Song from "./types/song";


function App() {

  const [search , setSearch] = useState("Pop Smoke");

  const [songs, setSongs] = useState<Song[]>([]);

  const fetchSongs = async (search: string) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search
      );
      if (response.ok) {
        let { data } = await response.json();
        console.log(data)
        setSongs(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs(search);
  } , []);

  return (
    <div>
      <Router>
        <TopBar search={search} setSearch={setSearch} fetchSongs={fetchSongs} />
        <Routes>
          <Route path="/" element={<Home songs={songs}/>} />
          <Route path="/details/:id" element={<SongDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;