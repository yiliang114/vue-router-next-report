const microAppRoute = [
  {
    name: "xxx",
    entry: "https://www.baidu.com/",
  },
  {
    name: "yyy",
    entry: "https://www.google.com/",
  },
];

const microApps: any[] = microAppRoute.map(({ name, entry }) => {
  return {
    name,
    entry,
  };
});

export { microApps };
