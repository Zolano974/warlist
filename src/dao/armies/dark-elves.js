/**Description of Darkelves army list */
export default {
  key: "darkelves",
  title: "Dark Elves",
  army: {
    lords: [],
    heroes: {
      master: {
        title: "Master",
        cost: 70,
        type: "infantry (character)",
        profile: {
          base: {
            M: 5,
            WS: 6,
            BS: 6,
            F: 4,
            T: 3,
            PV: 2,
            I: 7,
            A: 3,
            Cd: 9
          }
        },
        specialRules: [
          "Always Strike First",
          "Hatred (High Elves)",
          "Murderous Prowess"
        ],
        equipment: ["Hand Weapon", "Light Armour"],
        options: [
          {
            title: "[Weapon] Additionnal hand weapon",
            cost: 2
          },
          {
            title: "[Weapon] Hallberd",
            cost: 2
          },
          {
            title: "[Weapon] Great Weapon",
            cost: 4
          },
          {
            title: "[Weapon] Lance (mounted only)",
            cost: 6
          },
          {
            title: "[Distance] Repeater Crossbow",
            cost: 5
          },
          {
            title: "[Distance] Repeater Handbow",
            cost: 5
          },
          {
            title: "[Distance] Brace of repeater handbows",
            cost: 10
          },
          {
            title: "Replace light armour by heavy armour",
            cost: 4
          },
          {
            title: "Sea Dragon cloak",
            cost: 6
          },
          {
            title: "Shield",
            cost: 2
          },
          {
            title: "[Mount] Dark Steed",
            cost: 10
          },
          {
            title: "[Mount] Cold One",
            cost: 12
          },
          {
            title: "[Mount] Dark Pegasus",
            cost: 50
          },
          {
            title: "[Mount] Manticore",
            cost: 150,
            options: [
              {
                title: "Iron Hard Skin",
                cost: 20
              },
              {
                title: "Blind Rage",
                cost: 20
              }
            ]
          },
          {
            title: "[Mount] Cold One Chariot",
            cost: 120
          }
        ],
        maxMagicItems: 50
      }
    },
    base: {
      blackArkCorsair: {
        title: "Black Ark Corsair",
        cost: 9,
        type: "infantry",
        profile: {
          base: {
            M: 5,
            WS: 4,
            BS: 4,
            F: 3,
            T: 3,
            PV: 1,
            I: 5,
            A: 1,
            Cd: 8
          },
          champion: {
            M: 5,
            WS: 4,
            BS: 4,
            F: 3,
            T: 3,
            PV: 1,
            I: 5,
            A: 2,
            Cd: 8
          }
        },
        specialRules: [
          "Always Strike First",
          "Hatred (High Elves)",
          "Murderous Prowess"
        ],
        equipment: ["Base weapon", "Light Armour", "Seadragon Cloak"],
        options: [
          {
            title: "Additional base weapon",
            cost: 2
          },
          {
            title: "Repeater handbow",
            cost: 2
          }
        ],
        headquarter: {
          champion: 10,
          musician: 10,
          standard: 10,
          maxMagicStandard: 0
        }
      }
    },
    special: {
      executionners: {
        key: "executionners",
        title: "Har Ganeth Executionners",
        cost: 12,
        type: "infantry",
        profile: {
          base: {
            M: 5,
            WS: 4,
            BS: 4,
            F: 4,
            T: 3,
            PV: 1,
            I: 5,
            A: 1,
            Cd: 9
          },
          champion: {
            M: 5,
            WS: 4,
            BS: 4,
            F: 4,
            T: 3,
            PV: 1,
            I: 5,
            A: 2,
            Cd: 9
          }
        },
        specialRules: [
          "Always Strike First",
          "Hatred (High Elves)",
          "Murderous Prowess",
          "Killing Blow"
        ],
        equipment: ["Heavyweapon", "Heavy Armour"],
        options: [],
        headquarter: {
          champion: 10,
          musician: 10,
          standard: 10,
          maxMagicStandard: 50
        }
      },
      reaperBoltThrower: {
        title: "Reaper Bolt Thrower",
        cost: 70,
        type: "war machine (2 dark elf crew)",
        profile: {
          base: {
            M: null,
            WS: null,
            BS: null,
            F: null,
            T: 7,
            PV: 2,
            I: null,
            A: null,
            Cd: null
          },
          crew: {
            M: 5,
            WS: 4,
            BS: 4,
            F: 3,
            T: 3,
            PV: 1,
            I: 5,
            A: 2,
            Cd: 9
          }
        },
        specialRules: [
          "Always Strike First",
          "Hatred (High Elves)",
          "Murderous Prowess",
          "Repeater Bolt Thrower"
        ]
      }
    },
    rare: {
      doomfireWarlocks: {
        title: "Doomfire Warlocks",
        cost: 25,
        type: "cavalry",
        profile: {
          base: {
            M: 5,
            WS: 4,
            BS: 4,
            F: 4,
            T: 3,
            PV: 1,
            I: 5,
            A: 2,
            Cd: 9
          },
          champion: {
            M: 5,
            WS: 4,
            BS: 4,
            F: 4,
            T: 3,
            PV: 1,
            I: 5,
            A: 3,
            Cd: 9
          },
          mount: {
            M: 9,
            WS: 3,
            BS: 0,
            F: 3,
            T: 3,
            PV: 1,
            I: 4,
            A: 1,
            Cd: 5
          }
        },
        specialRules: [
          "Always Strike First",
          "Hatred (High Elves)",
          "Murderous Prowess",
          "Cursed Coven",
          "Fast Cavalry",
          "Poisoned Attacks (riders only)",
          "Prey of the Dark Prince"
        ],
        equipment: ["Hand Weapon"],
        options: [],
        headquarter: {
          champion: 10,
          musician: 0,
          standard: 0,
          maxMagicStandard: 0
        }
      }
    }
  }
};
