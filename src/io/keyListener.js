import { useEffect } from "react";
import { getThreadsToCheckout } from "./localStorageUtils";

// can convert this to a reducer thing?
export default ({
  currentItem,
  setCurrentItem,
  savedItems,
  setSavedItems,
  links,
  dispatch
}) => {
  useEffect(() => {
    const handleTyping = event => {
      switch (event.key) {
        case "j":
          dispatch({
            type: "add_item",
            params: { currentItem, links, setSavedItems, setCurrentItem }
          });
          return;
        case "f":
          dispatch({
            type: "skip_item",
            params: { currentItem, links, setCurrentItem }
          });
          return;
        case "g":
        case "h":
          dispatch({
            type: "undo_item",
            params: { setSavedItems, setCurrentItem, currentItem }
          });
          return;
        case "b":
          dispatch({ type: "flush", params: { savedItems, setSavedItems } });
          return;
        case "m":
          // print current local storage items
          console.log(getThreadsToCheckout());
          return;
        case "z":
          window.localStorage.clear();
          return;
        default:
          return;
      }
    };

    window.document.addEventListener("keydown", handleTyping);
    return () => {
      window.document.removeEventListener("keydown", handleTyping);
    };
  });
};
