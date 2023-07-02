import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Horoscope() {
  const navigate = useNavigate();
  const { zodiacSign } = useParams();
  const [horoscope, setHoroscope] = useState("");

  useEffect(() => {
    fetch(
      `http://sandipbgt.com/theastrologer/api/horoscope/${zodiacSign.toLowerCase()}/today`
    )
      .then((response) => response.json())
      .then((data) => {
        setHoroscope(data.horoscope);
      });
  }, []);

  return (
    <div className="text-white">
      <h2>{zodiacSign} Today</h2>
      <p style={{ fontSize: "18px" }}>{horoscope}</p>
      <Button variant="dark" onClick={() => navigate(`/${zodiacSign}`)}>
        Back
      </Button>
    </div>
  );
}

export default Horoscope;
