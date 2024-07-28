import initialRender from './scripts/initialRender';
import aboutRender from './scripts/aboutRender';
import menuRender from './scripts/menuRender';
import './styles/styles.css';

const mainWrapper = document.getElementById('content');
const btns = document.getElementById('btn-container');

btns.addEventListener('click', (e) => {
  // event is only for btns
  if (!e.target.closest('.btn')) return;

  const currentPage = e.target.dataset.id;

  // change page content based on btn
  switch (true) {
    case currentPage == 'home':
      mainWrapper.innerHTML = '';
      mainWrapper.appendChild(initialRender());
      break;
    case currentPage == 'menu':
      mainWrapper.innerHTML = '';
      mainWrapper.appendChild(menuRender());
      break;
    case currentPage == 'about':
      mainWrapper.innerHTML = '';
      mainWrapper.appendChild(aboutRender());
      break;
    default:
      console.log('default');
  }
});

mainWrapper.appendChild(initialRender());
