const THREADS_TO_CHECKOUT_KEY = "__THREADS_TO_CHECKOUT";

const CURRENT_COUNT_KEY = "__CURRENT_COUNT_KEY";
let CURRENT_COUNT = 0;

const getThreadsToCheckout = () => {
  return JSON.parse(window.localStorage.getItem(THREADS_TO_CHECKOUT_KEY));
};

const setThreadsToCheckout = threadsList => {
  const oldThreads = getThreadsToCheckout();
  const mergedThreads = {
    ...oldThreads,
    ...threadsList
  };
  window.localStorage.setItem(
    THREADS_TO_CHECKOUT_KEY,
    JSON.stringify(mergedThreads)
  );
};

const getCurrentCount = () => {
  CURRENT_COUNT =
    window.parseInt(window.localStorage.getItem(CURRENT_COUNT_KEY)) || 0;
  return CURRENT_COUNT;
};

const setCurrentCount = i => {
  window.localStorage.setItem(CURRENT_COUNT_KEY, i);
};

export {
  getThreadsToCheckout,
  setThreadsToCheckout,
  getCurrentCount,
  setCurrentCount
};
