// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt } from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// Sidebar Data

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
    path: "/Landing", 
  },
  {
    icon: UilUsersAlt,
    heading: "Alerts",
    path: "/Alert", 
  },
  {
    icon: UilPackage,
    heading: 'Reports',
    path: "/Report", 
  },
  {
    icon: UilChart,
    heading: 'Analytics',
    path: "/Analytics", 
  },
];

// Analytics RT data
export const Ph = [
  {
    name: "Water",
    data: [8, 2, 4, 6],
  },

  {
    name: "Chlorine",
    data: [10, 8, 8, 3],
  },
];
export const orp = [
  {
    name: "Water",
    data: [8, 2, 4, 6],
  },

  {
    name: "Chlorine",
    data: [10, 8, 8, 3],
  },
];
export const Solubility = [
  {
    name: "Water",
    data: [8, 2, 4, 6],
  },

  {
    name: "Chlorine",
    data: [10, 8, 8, 3],
  },
];
export const Turbity = [
  {
    name: "Water",
    data: [8, 2, 4, 6],
  },

  {
    name: "Chlorine",
    data: [10, 8, 8, 3],
  },
];
export const tmp = [
  {
    name: "Water",
    data: [8, 2, 4, 6],
  },

  {
    name: "Chlorine",
    data: [10, 8, 8, 3],
  },
];

export const options = {
  chart:  {
    type: 'area',
    height:300,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2024-10-19T00:00:00.000Z",
      "2024-10-19T01:30:00.000Z",
      "2024-10-19T02:30:00.000Z",
      "2024-10-19T03:30:00.000Z",
      "2024-10-19T04:30:00.000Z",
      "2024-10-19T05:30:00.000Z",
      "2024-10-19T06:30:00.000Z",
    ],
  },
  yaxis: {
    title: {
      text: 'PH',
    },
  },

};


// Analytics Cards Data
export const cardsData = [
  {
    title: "Ph",
    color: {
      backGround: "linear-gradient(180deg, #72b2e4 0%, #92e1e2 100%)",
      boxShadow: "0px 10px 20px 0px #a0d2eb",
    },
   
    barValue: Ph.map(item => 10*(item.data[0])),
    png: UilUsdSquare,
    series: [
      {
        name: "Ph",
        data: [10, 100, 50, 70, 80, 30, 40 ],
      },
    ],
  },
  {
    title: "ORP",
    color: {
      backGround: "linear-gradient(180deg, #00f4fd, #72b2e4 100%)",
      boxShadow: "0px 10px 20px 0px #a0d2eb",
    },
    barValue: orp.map(item => 10*(item.data[0])),
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "ORP",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Solubility",
    color: {
      backGround: "linear-gradient(180deg, #a1c4fd 0%, #c2e9fb 100%)",
      boxShadow: "0px 10px 20px 0px #a0d2eb",
    },
    barValue: Solubility.map(item => 10*(item.data[0])),
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Solubility",
        data: [],
      },
    ],
  },
  {
    title: "Turbity ",
    color: {
      backGround:
        "linear-gradient(180deg, #4e65ff 0%, #92effd 100%)",
      boxShadow: "0px 10px 20px 0px #a0d2eb",
    },
    barValue: Turbity.map(item => 10*(item.data[0])),
    png: UilClipboardAlt,
    series: [
      {
        name: "Turbity",
        data: [],
      },
    ],
  },
  {
    title: "Temperature ",
    color: {
      backGround:
        "linear-gradient(180deg, #a1c4fd 0%, #08f1d9 100%)",
      boxShadow: "0px 10px 20px 0px #a0d2eb",
    },
    barValue: tmp.map(item => 10*(item.data[0])),
    png: UilClipboardAlt,
    series: [
      {
        name: "Temperature",
        data: [],
      },
    ],
  },
];
