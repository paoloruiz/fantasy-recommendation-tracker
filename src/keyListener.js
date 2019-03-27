import { useEffect } from "react";
import RingBuffer from "./RingBuffer";

const rb = new RingBuffer();

export default ({ currentItem, setCurrentItem, setSavedItems, links }) => {
  useEffect(() => {
    const handleTyping = event => {
      switch (event.key) {
        case "j":
          if (currentItem === links.length) {
            return;
          }
          const item = links[currentItem];
          rb.push(item);
          setSavedItems(state => state.add(item));
          setCurrentItem(currentItem + 1);
          return;
        case "f":
          if (currentItem === links.length) {
            return;
          }
          rb.push("");
          setCurrentItem(currentItem + 1);
          return;
        case "g":
        case "h":
          // Yeah this is janky, what are ya gonna do about it?
          const poppedItem = rb.pop();
          if (poppedItem !== null) {
            if (poppedItem !== "") {
              setSavedItems(state => {
                state.delete(poppedItem);
                return state;
              });
            }
            setCurrentItem(currentItem - 1);
          }
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
