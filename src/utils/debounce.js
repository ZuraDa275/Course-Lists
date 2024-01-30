export const debounce = (funcToBeHandled, delay) => {
  let id;
  return (...args) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      funcToBeHandled(...args);
    }, delay);
  };
};
