// Import stylesheets
import './style.css';

const wrapper = document.querySelector('.item-wrapper');

const item = document.querySelector('.item');
const arrow = document.querySelector('.arrow');
const articles = document.querySelectorAll('article');
const texts = document.querySelectorAll('article div span');
const borders = document.querySelectorAll('article > div');
const bordersArrow = document.querySelectorAll('article header > div');
const svgs = document.querySelectorAll('article div svg');

svgs[0].setAttribute('stroke', 'red');
console.log(articles, texts, bordersArrow);

// arrow.addEventListener('click', () => {
//   console.log('ok');
//   // arrow.style.background = 'red'
//   // arrow.style.animation = 'roundItem 1s forwards'
//   // item.style.animation = 'hideOut 1s forwards'
//   arrow.classList.toggle('round-item');
//   item.classList.toggle('hide-item');
//   if (item.classList.contains('hide-item')) {
//     setTimeout(function() {
//       item.style.display = 'none';
//     }, 1000);
//   } else {
//     item.style.display = '';
//   }
// });

svgs[0].addEventListener('click', () => {
  borders[0].classList.remove('border-transparent');
  borders[0].classList.add('border-indigo');
  borders[0].classList.add('bg-grey-lightest');
  
  texts[0].classList.add('text-indigo');
  bordersArrow[0].classList.add('border-indigo');
  svgs[0].setAttribute('stroke', 'white');
  bordersArrow[0].classList.add('round-item');
});


svgs[1].addEventListener('click', (e) => {
  /*elements*/
  const arrow = e.target
  const borderArrow = arrow.parentNode;
  const text = borderArrow.previousElementSibling;
  const header = borderArrow.parentNode;
  const border = header.parentNode;
  const divWithItems = header.nextElementSibling
  const itemWrapper = divWithItems.firstElementChild
  const item = itemWrapper.firstElementChild
/*elements*/

  
if(divWithItems){
  arrow.classList.toggle('round-item');
  item.classList.toggle('hide-item');
  if (item.classList.contains('hide-item')) {
    setTimeout(function() {
      item.style.display = 'none';
    }, 1000);
  } else {
    item.style.display = '';
  }
}

border.classList.remove('border-transparent');
  border.classList.add('border-indigo');
  border.classList.add('bg-grey-lightest');
  
  text.classList.add('text-indigo');
  borderArrow.classList.add('border-indigo');
  // svgs[0].setAttribute('stroke', 'white');
  // borderArrow.classList.add('round-item');

  console.log( itemWrapper, item)
})