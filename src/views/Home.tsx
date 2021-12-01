import { Row, Col, Container } from "react-bootstrap";
import SingleSong from "../components/SingleSong";
import Song from "../types/song";

function Home({ songs } : { songs: Song[] }) {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        {songs?.map((song) => {
          return <SingleSong song={song} />;
        })}
      </Row>
    </Container>
  );
}



export default Home;