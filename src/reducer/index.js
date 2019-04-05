import addItem from "./addItem";
import skipItem from "./skipItem";
import undoItem from "./undoItem";
import flushToLocalStorage from "./flushToLocalStorage";

import RingBuffer from "../RingBuffer";

const rb = new RingBuffer();

export default action => {
  switch (action.type) {
    case "add_item":
      addItem(action.params, rb);
      return;
    case "skip_item":
      skipItem(action.params, rb);
      return;
    case "undo_item":
      undoItem(action.params, rb);
      return;
    case "flush":
      flushToLocalStorage(action.params, rb);
      return;
    default:
      throw new Error("no action matches " + action);
  }
};
