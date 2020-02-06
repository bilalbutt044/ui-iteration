export default [
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
