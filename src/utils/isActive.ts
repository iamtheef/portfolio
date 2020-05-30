const isActive = (name: string) => {
  const hash = window.location.hash;

  return hash === name;
};

export default isActive;
