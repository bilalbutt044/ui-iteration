import React from "react";
import { Tabs } from "antd";

import { CardSection1 } from "./CardSection1/CardSection1";
import { CardSection2 } from "./CardSection2/CardSection2";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

export const FolderTab = props => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback} className="folder-tab">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          Content of Tab Pane 4
        </TabPane>
        <TabPane tab="Tab 5" key="5">
          Content of Tab Pane 5
        </TabPane>
        <TabPane tab="Tab 6" key="6">
          Content of Tab Pane 6
        </TabPane>
        <TabPane tab="Tab 7" key="7">
          Content of Tab Pane 7
        </TabPane>
      </Tabs>

      <CardSection1 />
      <CardSection2 />
    </>
  );
};
