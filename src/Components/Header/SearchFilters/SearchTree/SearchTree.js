import React from "react";
import { Collapse } from "antd";
import { ListComponent } from "./ListComponent/ListComponent";

const categories = [
  {
    name: "Category1",
    options: [
      {
        name: "Armadillo",
        value: "AR"
      },
      {
        name: "Wolverine",
        value: "WO"
      },
      {
        name: "Vicuna",
        value: "VI"
      },
      {
        name: "Panther",
        value: "PA"
      },
      {
        name: "Squirrel",
        value: "SQ"
      },
      {
        name: "Lion",
        value: "LI"
      }
    ]
  },
  {
    name: "Category6",
    options: [
      {
        name: "Mammals",
        value: 1
      },

      {
        name: "Birds",
        value: 2
      },

      {
        name: "Fish",
        value: 3
      },

      {
        name: "Reptiles",
        value: 4
      },

      {
        name: "Amphibians",
        value: 5
      },

      {
        name: "Arthropods",
        value: 6
      }
    ]
  },

  {
    name: "Category7",
    options: [
      {
        name: "Cereal",
        value: 1
      },

      {
        name: "Climber",
        value: 2
      },

      {
        name: "Clone",
        value: 3
      },

      {
        name: "Cactus",
        value: 4
      }
    ]
  },

  {
    name: "Category8",
    options: [
      {
        name: "Animals",
        value: 1
      },

      {
        name: "Plant",
        value: 2
      },

      {
        name: "Bacterial",
        value: 3
      },

      {
        name: "Minerals",
        value: 4
      }
    ]
  },

  {
    name: "Category9",
    options: [
      {
        name: "Species",
        value: 1
      },

      {
        name: "Genus",
        value: 2
      },

      {
        name: "Family",
        value: 3
      },

      {
        name: "Order",
        value: 4
      },

      {
        name: "Class",
        value: 5
      },

      {
        name: "Phylum",
        value: 6
      },

      {
        name: "Kingdom",
        value: 7
      }
    ]
  }
];

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export const SearchTree = props => {
  return (
    <Collapse onChange={callback} className="search-tree-collapse">
      <Panel
        showArrow={false}
        header="Filter"
        key="1"
        className="search-tree-header"
      >
        <div className="search-tree">
          {categories.map(({ name, options }, index) => (
            <React.Fragment key={index}>
              <ListComponent name={name} options={options} />
            </React.Fragment>
          ))}
        </div>
      </Panel>
    </Collapse>
  );
};
