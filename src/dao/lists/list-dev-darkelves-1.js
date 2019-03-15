import codex from "../armies/dark-elves";

export default {
  title: "Dev Dark Elves 1",
  comment: "Test for dev purpose",
  cost: 749,
  army: {
    lords: [],
    heroes: [
      {
        cardinality: 1,
        unitKey: "master",
        finalCost: 94,
        headquarter: null,
        options: [
          {
            title: "Replace light armour by heavy armour",
            cost: 4
          },
          {
            title: "Sea Dragon cloak",
            cost: 6
          },
          {
            title: "[Weapon] Great Weapon",
            cost: 4
          }
        ],
        magicItems: [
          {
            title: "Bouclier Enchanté",
            effect: "+2 Svg",
            cost: 5
          },
          {
            title: "Pierre de Chance",
            effect: "Reroll 1st failed armour save",
            cost: 5
          }
        ]
      }
    ],
    core: [
      {
        cardinality: 23,
        unitKey: "blackArkCorsair",
        finalCost: 273,
        headquarter: {
          champion: true,
          standard: true
        },
        options: [
          {
            title: "Additional hand weapon",
            cost: 2
          }
        ]
      }
    ],
    special: [
      {
        cardinality: 270,
        unitKey: "executionners",
        finalCost: 0,
        headquarter: {
          champion: true,
          musician: true,
          standard: true
        },
        options: []
      },
      {
        cardinality: 1,
        unitKey: "reaperBoltThrower",
        finalCost: 70,
        headquarter: {},
        options: []
      }
    ],
    rare: [
      {
        cardinality: 5,
        unitKey: "doomfireWarlocks",
        finalCost: 135,
        headquarter: {
          champion: true
        },
        options: []
      }
    ]
  },
  stats: {
    lords: 0,
    heroes: 0,
    core: 0,
    special: 0,
    rare: 0
  }
};
