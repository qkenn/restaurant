export default (tagName, attributes = []) => {
  const newElement = document.createElement(tagName);

  if (attributes.length > 0) {
    attributes.forEach(([name, value]) => {
      newElement.setAttribute(name, value);
    });
  }

  return newElement;
};
