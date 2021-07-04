// Import stylesheets
import './style.css';

const wrapper = document.querySelector('.item-wrapper');

const item = document.querySelector('.item');
const arrow = document.querySelector('.arrow');
const articles = document.querySelectorAll('article');


console.log(articles);

arrow.addEventListener('click', () => {
  console.log('ok');
  // arrow.style.background = 'red'
  // arrow.style.animation = 'roundItem 1s forwards'
  // item.style.animation = 'hideOut 1s forwards'
  arrow.classList.toggle('round-item');
  item.classList.toggle('hide-item');
  if (item.classList.contains('hide-item')) {
    setTimeout(function() {
      item.style.display = 'none';
    }, 1000);
  } else {
    setTimeout(function() {
      item.style.display = '';
    }, 1000);
  }
});
