import React from "react";
import { Tabs } from "antd";

import { CardSection1 } from "./CardSection1";
import { CardSection2 } from "./CardSection2";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

export const FolderTab = props => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback} className="folder-tab">
        <TabPane tab="Tab 1" key="1">
          <CardSection1 />
          <CardSection2 />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <CardSection1 />
          <CardSection2 />
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <CardSection1 />
          <CardSection2 />
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          <CardSection1 />
          <CardSection2 />
        </TabPane>
        <TabPane tab="Tab 5" key="5">
          <CardSection1 />
          <CardSection2 />
        </TabPane>
        <TabPane tab="Tab 6" key="6">
          <CardSection1 />
          <CardSection2 />
        </TabPane>
        <TabPane tab="Tab 7" key="7">
          <CardSection1 />
          <CardSection2 />
        </TabPane>
      </Tabs>
    </>
  );
};
