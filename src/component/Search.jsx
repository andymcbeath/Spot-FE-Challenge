import CardImg from "react-bootstrap/CardImg";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardHeader from "react-bootstrap/CardHeader";

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
    <div className="row">
      {data.map((item) => (
        <div className="col-md-4" key={item.id}>
          <Card>
            <CardImg variant="top" src={item.image} />
            <CardHeader>{item.title}</CardHeader>
            <CardHeader>{item.distance}</CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
