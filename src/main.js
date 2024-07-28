import initialRender from './scripts/initialRender';
import aboutRender from './scripts/aboutRender';
import menuRender from './scripts/menuRender';
import './styles/styles.css';

const mainWrapper = document.getElementById('content');
const btns = document.getElementById('btn-container');

const handlePageRender = (currentPage) => {
  let renderFunction = null;

  switch (true) {
    case currentPage == 'home':
      renderFunction = initialRender;
      break;
    case currentPage == 'menu':
      renderFunction = menuRender;
      break;
    case currentPage == 'about':
      renderFunction = aboutRender;
      break;
    default:
      renderFunction = initialRender;
  }

  mainWrapper.innerHTML = '';
  mainWrapper.appendChild(renderFunction());
};

btns.addEventListener('click', (e) => {
  // event is only for btns
  if (!e.target.closest('.btn')) return;

  const currentPage = e.target.dataset.id;

  // change page content based on btn
  switch (true) {
    case currentPage == 'home':
      handlePageRender(currentPage);
      break;
    case currentPage == 'menu':
      handlePageRender(currentPage);
      break;
    case currentPage == 'about':
      handlePageRender(currentPage);
      break;
    default:
      console.log('default');
  }
});

mainWrapper.appendChild(initialRender());
