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

  const menu = createTag('ul', [['class', 'menu']]);

  const MenuContent = [
    'Appetizers',
    'Sushi & Sashimi',
    'Ramen and Udon',
    'Entrees',
    'Desserts',
    'Drinks',
  ];
  const menuItems = [];
  for (let i = 0; i < 6; i++) {
    menuItems.push(createTag('li', [['class', 'menu-item']]));
  }
  menuItems.forEach((item, key) => (item.textContent = MenuContent[key]));
  menuItems.forEach((item) => menu.appendChild(item));

  const elements = [title, imgContainer, menu];
  elements.forEach((element) => pageWrapper.appendChild(element));

  return pageWrapper;
};
