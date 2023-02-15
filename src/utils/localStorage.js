const localStorage = window.localStorage;

export const getItem = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

export const setItem = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value));
};

export const removeItem = (item) => {
  localStorage.removeItem(item);
};
