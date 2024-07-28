import createTag from './helpers/createTag';

export default () => {
  const pageWrapper = createTag('div');

  const title = createTag('h2', [['class', 'page-title']]);
  title.textContent = 'About';

  const paragraph = createTag('p', [['class', 'info']]);
  paragraph.textContent = 'about content';

  pageWrapper.appendChild(title);
  pageWrapper.appendChild(paragraph);

  return pageWrapper;
};
