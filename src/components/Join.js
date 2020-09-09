import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/join.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="outerContainer">
      <div className="innerContainer">
      <h1 className="heading">Chat Space</h1>
        <h3 className="title">Join</h3>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="roomInput"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="submitButton" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
