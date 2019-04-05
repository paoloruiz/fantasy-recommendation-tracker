export default ({ currentItem, links, setCurrentItem }, rb) => {
  if (currentItem === links.length) {
    return;
  }
  rb.push("");
  setCurrentItem(currentItem + 1);
};
