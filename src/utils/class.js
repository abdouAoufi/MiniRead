const classNames = function (...classes) {
  return classes.filter(Boolean).join(" ");
};

export { classNames };
