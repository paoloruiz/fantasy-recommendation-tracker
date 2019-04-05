export default ({ setSavedItems, setCurrentItem, currentItem }, rb) => {
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
};
