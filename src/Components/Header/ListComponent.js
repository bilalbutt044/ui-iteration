import React from "react";

import ListItem from "./ListItem";

export const ListComponent = ({ name, options }) => {
  return (
    <div className="list-component">
      <h5 className="list-component-heading">{name}</h5>
      <ul>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem key={index} value={item.name} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
