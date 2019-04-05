import { setThreadsToCheckout } from "../io/localStorageUtils";

export default ({ savedItems, setSavedItems }, rb) => {
  try {
    // flush to local storage
    const threads = {};
    savedItems.forEach(item => {
      threads[item.id] = item;
    });
    setThreadsToCheckout(threads);
    // update savedItems to blank
    setSavedItems(new Set());
    // flush RingBuffer
    rb.flush();
  } catch (e) {
    console.log(e);
  }
};
