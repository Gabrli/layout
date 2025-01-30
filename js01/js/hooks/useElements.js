const useElements = (value, isAll) =>isAll ? document.querySelectorAll(value) : document.querySelector(value);
export { useElements }