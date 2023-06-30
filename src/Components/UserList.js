import React from "react";
import { useParams } from "react-router-dom";

const UserList = () => {
  const { zodiacSign } = useParams();

  return (
    <div>
      <h2>USER LIST</h2>
      <p>{zodiacSign}</p>
    </div>
  );
};

export default UserList;
