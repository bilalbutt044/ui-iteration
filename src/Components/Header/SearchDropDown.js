import React from "react";
import { Row, Col, Menu, Dropdown, Button, Icon, message } from "antd";

const categories = [
  {
    name: "Category2",
    options: [
      {
        name: "Africa",
        value: "AF"
      },

      {
        name: "Asia",
        value: "AS"
      },

      {
        name: "South America",
        value: "SA"
      },

      {
        name: "North America",
        value: "NA"
      },

      {
        name: "Europe",
        value: "EU"
      }
    ]
  },

  {
    name: "Category3",
    options: [
      {
        name: "United Kingdom",
        value: "GBR"
      },
      {
        name: "France",
        value: "FRA"
      },
      {
        name: "Russia",
        value: "RUS"
      },
      {
        name: "United States of America",
        value: "USA"
      },
      {
        name: "China",
        value: "CHN"
      },
      {
        name: "Japan",
        value: "JPN"
      }
    ]
  },

  {
    name: "Category4",

    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(y => {
      const thisYear = new Date().getFullYear();
      return {
        name: y + thisYear,

        value: (y + thisYear).toString().slice(2, 4)
      };
    })
  }
];

categories.map(item => (item.menu = menuItem(item.options)));

function menuItem(options) {
  return (
    <Menu onClick={handleMenuClick}>
      {options.map(({ name, value }, index) => (
        <Menu.Item key={value}>{name}</Menu.Item>
      ))}
      
    </Menu>
  );
}
function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

export const SearchDropDown = props => {
  return (
    <Row className="search-dropdown" gutter={4}>
      {categories.map(({ name, options, menu }, index) => {
        return (
          <Col span={8} key={index}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button>
                {name} <Icon type="down" />
              </Button>
            </Dropdown>
          </Col>
        );
      })}
    </Row>
  );
};
