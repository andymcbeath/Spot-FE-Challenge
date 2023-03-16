import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { CardImg } from "react-bootstrap";

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
        <Card className="d-flex" key={item.id}>
          <CardImg
            style={{ width: "26%", paddingTop: "2rem", paddingBottom: "2rem", paddingRight: "1rem" }}
            src={item.image}
          />
          <Card.Body className="col-md-7">
            <h1>{item.title}</h1>
            <br />
            <p>{item.distance}</p>
            <br />
            <a href="#">Details</a>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}
