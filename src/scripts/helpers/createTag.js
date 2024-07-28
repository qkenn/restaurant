export default (tagName, attributes) => {
  const newElement = document.createElement(tagName);

  if (attributes.length > 0) {
    attributes.forEach((attPair) => {
      newElement.setAttribute(attPair.name, attPair.value);
    });
  }

  return newElement;
};
