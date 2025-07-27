const isActive = (name: string) => {
  const hash = window.location.hash;
  const pathname = window.location.pathname;

  if (hash) {
    return hash === name;
  }

  return name === "#/" && pathname.includes("/portfolio");
};

export default isActive;
