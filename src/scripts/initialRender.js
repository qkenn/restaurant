import createTag from './helpers/createTag';
import picture from '../images/vibrant-restaurant-exterior-at-dusk.jpg';

export default () => {
  const pageWrapper = createTag('div');

  const title = createTag('h2', [['class', 'page-title']]);
  title.textContent = 'Homepage';

  const imgContainer = createTag('div', [['class', 'img-container']]);
  const img = createTag('img', [
    ['id', 'page-img'],
    ['alt', 'vibrant restaurant exterior at dusk'],
    ['class', 'img'],
    ['src', picture],
  ]);
  imgContainer.appendChild(img);

  const descriptionInfo = createTag('p', [['class', 'info']]);
  descriptionInfo.textContent =
    'Step into Yume Ranch and be transported to the vibrant streets of Tokyo. Our cozy restaurant is designed to evoke the warmth hospitality of traditional Japanese culture, with rich wood accents, paper lanterns, and delicate cherry blossom motifs.';

  const firstHeadline = createTag('h3', [['class', 'headline']]);
  firstHeadline.textContent = 'Culinary Delights';
  const firstHeadlineInfo = createTag('p', [['class', 'info']]);
  firstHeadlineInfo.textContent =
    "Our chefs, trained in the art of Japanese cuisine, prepare each dish with precision and passion. Savor our signature sushi rolls, crafted with the freshest seafood and vegetables, or indulge in our tender and juicy teriyaki meats. From steaming bowls of ramen to delicate tempura bites, every dish is a flavorful journey through Japan's culinary landscape.";

  const secondHeadline = createTag('h3', [['class', 'headline']]);
  secondHeadline.textContent = 'Cozy Ambiance';
  const secondHeadlineInfo = createTag('p', [['class', 'info']]);
  secondHeadlineInfo.textContent =
    'Unwind in our intimate dining area, surrounded by the soft glow of lanterns and the gentle hum of traditional Japanese music. Our attentive staff will guide you through our extensive menu, happy to recommend their favorite dishes or help you create a customized meal.';

  const elements = [
    title,
    imgContainer,
    descriptionInfo,
    firstHeadline,
    firstHeadlineInfo,
    secondHeadline,
    secondHeadlineInfo,
  ];
  elements.forEach((element) => pageWrapper.appendChild(element));

  return pageWrapper;
};
