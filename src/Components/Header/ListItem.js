import React, { useState } from "react";

export default ({ value }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = e => {
    setSelected(!selected);

    e.target.style.fontWeight = e.target.style.fontWeight === "" ? "bold" : "";
  };

  return (
    <li onClick={e => handleClick(e)}>
      {value} {selected && <span className="list-item-icon">{"x"}</span>}
    </li>
  );
};
