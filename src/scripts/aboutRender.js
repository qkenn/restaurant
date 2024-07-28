import createTag from './helpers/createTag';
import picture from '../images/authentic-asian-restaurant-interior.jpg';

export default () => {
  const pageWrapper = createTag('div');

  const title = createTag('h2', [['class', 'page-title']]);
  title.textContent = 'About';

  const imgContainer = createTag('div', [['class', 'img-container']]);
  const img = createTag('img', [
    ['id', 'page-img'],
    ['alt', 'vibrant restaurant exterior at dusk'],
    ['class', 'img'],
    ['src', picture],
  ]);
  imgContainer.appendChild(img);

  const description = createTag('div', [['class', 'description']]);

  const headline = createTag('h3', [['class', 'headline']]);
  headline.textContent = 'Experience the Art of Japanese Cuisine';
  const headlineInfo = createTag('p', [['class', 'info']]);
  headlineInfo.textContent =
    "At Yume Ranch, we invite you to embark on a culinary adventure that will leave you feeling like you're dining in the heart of Japan. Come for the food, stay for the warm hospitality, and return for the unforgettable experience.";

  description.appendChild(headline);
  description.appendChild(headlineInfo);

  pageWrapper.appendChild(title);
  pageWrapper.appendChild(imgContainer);
  pageWrapper.appendChild(description);

  return pageWrapper;
};
