export default ({ currentItem, links, setSavedItems, setCurrentItem }, rb) => {
  if (currentItem === links.length) {
    return;
  }
  const item = links[currentItem];
  rb.push(item);
  setSavedItems(state => state.add(item));
  setCurrentItem(currentItem + 1);
};
