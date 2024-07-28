import createTag from './helpers/createTag';
import picture from '../images/vibrant-casual-dining-experience.jpg';

export default () => {
  const pageWrapper = createTag('div');

  const title = createTag('h2', [['class', 'page-title']]);
  title.textContent = 'Menu';

  const imgContainer = createTag('div', [['class', 'img-container']]);
  const img = createTag('img', [
    ['id', 'page-img'],
    ['alt', 'vibrant restaurant exterior at dusk'],
    ['class', 'img'],
    ['src', picture],
  ]);
  imgContainer.appendChild(img);

  const description = createTag('div', [['class', 'description']]);

  const menu = createTag('ul', [['class', 'menu']]);

  const item1 = createTag('li', [['class', 'menu-item']]);
  item1.textContent = 'Appetizers';
  const item2 = createTag('li', [['class', 'menu-item']]);
  item2.textContent = 'Sushi & Sashimi';
  const item3 = createTag('li', [['class', 'menu-item']]);
  item3.textContent = 'Ramen and Udon';
  const item4 = createTag('li', [['class', 'menu-item']]);
  item4.textContent = 'Entrees';
  const item5 = createTag('li', [['class', 'menu-item']]);
  item5.textContent = 'Desserts';
  const item6 = createTag('li', [['class', 'menu-item']]);
  item6.textContent = 'Drinks';

  const menuItems = [item1, item2, item3, item4, item5, item6];
  menuItems.forEach((item) => menu.appendChild(item));
  description.appendChild(menu);

  const elements = [title, imgContainer, menu];
  elements.forEach((element) => pageWrapper.appendChild(element));

  return pageWrapper;
};
