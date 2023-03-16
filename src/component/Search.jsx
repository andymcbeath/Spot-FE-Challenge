import CardImg from "react-bootstrap/CardImg";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";

export default function Search() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/spots")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Row className="mb-3">
      {data.map((item) => (
        <div className="col-md-12" key={item.id}>
          <Card fluid>
            <CardImg variant="left" src={item.image} />
            <Card.Body>{item.title}</Card.Body>
            <Card.Body>{item.distance}</Card.Body>
          </Card>
        </div>
      ))}
    </Row>
  );
}
