import React from "react";
import { Avatar } from "antd";

import Menu from "./Menu";

export const UserAvatar = props => {
  return (
    <div className="user-avatar">
      <Avatar shape="square" src="https://picsum.photos/id/1/5616/3744" />
      <Menu />
    </div>
  );
};
