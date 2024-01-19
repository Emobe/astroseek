interface DrawerItemChild {
  name: string;
  link: string;
};

interface DrawerItem {
  name: string;
  children: DrawerItemChild[];
};

const items: DrawerItem[] = [
  {
    name: "Free Horoscopes",
    children: [
      {
        name: "Birth Chart",
        link: "birth-chart"
      },
      {
        name: "Compatibility Horoscope",
        link: "compatibility"
      },
      {
        name: "Ascendant Rising Sign",
        link: "ascendant-rising-sign"
      },
      {
        name: "Moon & Sign Phase",
        link: "moon-sign-phase"
      },
      {
        name: "Daily Horoscope",
        link: "daily-horoscope"
      },
    ]
  },
  {
    name: "Predictive Astrology",
    children: []
  },
  {
    name: "Branches of Astrology",
    children: []
  },
  {
    name: "Tools",
    children: []
  }
];

export default items;
