export const print = (...args) => {
  args.forEach(function (arg) {
    const obj = JSON.stringify(arg , null , 2)
    console.log(`%c ${obj}`, "color : blue ;font-size : 1.5rem");
  });
};
