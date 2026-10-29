import { useState } from "react";

function Header(props) {
  const [nameStyle, setNameStyle] = useState({});

  function handleClick() {
    setNameStyle({ color: "lightgreen", backgroundColor: "black" });
  }

  return (
    <header>
      <h2 style={nameStyle} onClick={handleClick}>
        {props.name}
      </h2>
    </header>
  );
}

export default Header;