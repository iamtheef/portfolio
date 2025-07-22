const isActive = (name: string) => {
  const hash = window.location.hash;
  console.log(name, hash === name);

  return hash === name;
};

export default isActive;
