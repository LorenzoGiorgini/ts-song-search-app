import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Song from "../types/song";

function SingleSong({ song }: { song: Song }) {
  return (
    <Col xs={12} sm={6} lg={2}>
      <Card>
        <Link to={"/details/" + song.id}>
          <Card.Img
            variant="top"
            src={song.album.cover_medium}
            alt="Song-Img"
          />
        </Link>
        <Card.Body>
          <Card.Title>{song.title}</Card.Title>
          <Card.Text>{song.album.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleSong;