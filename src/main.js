import initialRender from './scripts/initialRender';
import './styles/styles.css';
import img from './images/vibrant-restaurant-exterior-at-dusk.jpg';

// document.getElementById('page-img').setAttribute('src', img);

const mainWrapper = document.getElementById('content');

mainWrapper.appendChild(initialRender());
