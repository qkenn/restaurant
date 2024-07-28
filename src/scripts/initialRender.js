import './helpers/createTag';
import createTag from './helpers/createTag';

export default () => {
  const pageWrapper = createTag('div');

  const title = createTag('h2', [['class', 'page-title']]);
  title.textContent = 'Homepage';

  const paragraph = createTag('p', [['class', 'value']]);
  paragraph.textContent =
    'Step into Yume Ranch and be transported to the vibrant streets of Tokyo. Our cozy restaurant is designed to evoke the warmth hospitality of traditional Japanese culture, with rich wood accents, paper lanterns, and delicate cherry blossom motifs.';

  pageWrapper.appendChild(title);
  pageWrapper.appendChild(paragraph);

  return pageWrapper;
};
