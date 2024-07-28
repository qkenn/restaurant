export default (tagName, attributes = []) => {
  // create element based on tag
  const newElement = document.createElement(tagName);

  // set attributes
  if (attributes.length > 0) {
    attributes.forEach(([name, value]) => {
      newElement.setAttribute(name, value);
    });
  }

  return newElement;
};
