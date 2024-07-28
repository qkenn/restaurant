import initialRender from './scripts/initialRender';
import aboutRender from './scripts/aboutRender';
import menuRender from './scripts/menuRender';
import './styles/styles.css';

class App {
  mainWrapper = document.getElementById('content');
  btns = document.getElementById('btn-container');

  constructor() {
    this.mainWrapper.appendChild(initialRender());
  }

  init() {
    this.btns.addEventListener('click', this.handleEvent);
  }

  handleEvent = (e) => {
    // event is only for btns
    if (!e.target.closest('.btn')) return;

    const currentPage = e.target.dataset.id;

    // change page content based on btn
    switch (true) {
      case currentPage == 'home':
        this.handlePageRender(currentPage);
        break;
      case currentPage == 'menu':
        this.handlePageRender(currentPage);
        break;
      case currentPage == 'about':
        this.handlePageRender(currentPage);
        break;
      default:
        console.log('default');
    }
  };

  handlePageRender(currentPage) {
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

    this.mainWrapper.innerHTML = '';
    this.mainWrapper.appendChild(renderFunction());
  }
}

const app = new App();
app.init();
