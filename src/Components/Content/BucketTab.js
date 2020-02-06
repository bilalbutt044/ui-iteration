import React from "react";
import { Tabs } from "antd";

import { FolderTab } from "./FolderTab";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const BucketTab = props => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback} className="bucket-tab">
        <TabPane tab="Tab 1" key="1">
          <FolderTab />;
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <FolderTab />;
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <FolderTab />;
        </TabPane>
      </Tabs>
    </>
  );
};
