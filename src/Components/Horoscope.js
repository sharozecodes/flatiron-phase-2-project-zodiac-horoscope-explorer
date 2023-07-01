import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Horoscope = ({ name }) => {
  const navigate = useNavigate();
  const { zodiacSign } = useParams();
  const [zodiacSigns, setZodiacSigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/zodiacs")
      .then((response) => response.json())
      .then((data) => {
        setZodiacSigns(data);
      });
  }, []);

  const favoriteFood = zodiacSigns.find(
    (zodiac) => zodiac.name === zodiacSign
  )?.favoriteFood;
  console.log(name);

  return (
    <div>
      <h2>{zodiacSign}</h2>
      <h1>{favoriteFood}</h1>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default Horoscope;
