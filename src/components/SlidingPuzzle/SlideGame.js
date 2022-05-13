import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"
import './SlideGame.scoped.css';

function SlideGame() {
  const [imgUrl, setImgUrl] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  // eslint-disable-next-line no-unused-vars
  const handleImageChange = (e) => {
    setImgUrl(e.target.value)
    window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
  }

  return (
    <div className="SlideGame">
      <h1>React sliding puzzle</h1>
      <Board imgUrl={imgUrl} />
    </div>
  );
}

export default SlideGame;
