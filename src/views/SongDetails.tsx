import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SongDetailsSchema from "../types/songDetails";

function SongDetails() {
  const { id } = useParams();

  const [album, setAlbum] = useState<SongDetailsSchema | null>(null);

  const fetchAlbum = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data)
        setAlbum(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <Container>
      <Card className="bg-dark text-white">
        <Card.Img src={album?.album.cover_medium} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{album?.title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}


export default SongDetails