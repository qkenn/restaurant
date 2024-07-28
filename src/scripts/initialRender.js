import './helpers/createTag';
import createTag from './helpers/createTag';

export default () => {
  console.log('hello from home render');

  const pageTitle = createTag('div', [{ name: 'class', value: 'page-title' }]);

  return pageTitle;
};
