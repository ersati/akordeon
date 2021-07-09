// Import stylesheets
import './style.css';

// Import stylesheets

// const wrapper = document.querySelector('.item-wrapper');
window.addEventListener('DOMContentLoaded', event => {
  console.log('DOM fully loaded and parsed');

  // const item = document.querySelector('.item');
  // const arrow = document.querySelector('.arrow');
  // const articles = document.querySelectorAll('article');
  // const texts = document.querySelectorAll('article div span');
  // const borders = document.querySelectorAll('article > div');
  // const bordersArrow = document.querySelectorAll('article header > div');
  const svgs = document.querySelectorAll('article div svg');

  // svgs[0].setAttribute('stroke', 'red');
  // console.log(articles, texts, bordersArrow);

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

  // svgs[0].addEventListener('click', () => {
  //   borders[0].classList.remove('border-transparent');
  //   borders[0].classList.add('border-indigo');
  //   borders[0].classList.add('bg-grey-lightest');

  //   texts[0].classList.add('text-indigo');
  //   bordersArrow[0].classList.add('border-indigo');
  //   svgs[0].setAttribute('stroke', 'white');
  //   bordersArrow[0].classList.add('round-item');
  // });
  function random(name) {
    console.log(name);
  }

  svgs.forEach(item => {
    item.addEventListener('click', e => {
      /*elements*/
      const arrow = e.target;
      const borderArrow = arrow.parentNode;
      const text = borderArrow.previousElementSibling;
      const header = borderArrow.parentNode;
      const border = header.parentNode;
      const divWithItems = header.nextElementSibling;
      const itemWrapper = divWithItems.children[0];
      const item = itemWrapper.children[0]
        ? divWithItems.children[0]
        : 'string';
      /*elements*/
      console.log(item, itemWrapper, divWithItems);
      random(this);
      if (divWithItems === null) {
        // if (borderArrow.classList.contains('border-indigo')) {
        //     arrow.setAttribute('stroke', 'white');
        //     borderArrow.classList.add('round-item');
        //   } else {
        //     arrow.setAttribute('stroke', '#606F7B');
        //     borderArrow.classList.remove('round-item');
        //   }
        return;
      }
      // console.log(arrow, borderArrow, text, header,border,divWithItems,itemWrapper, item)
      if (
        document.body.contains(divWithItems) &&
        document.body.contains(itemWrapper)
      ) {
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

      border.classList.toggle('border-transparent');
      border.classList.toggle('border-indigo');
      border.classList.toggle('bg-grey-lightest');

      text.classList.toggle('text-indigo');

      borderArrow.classList.toggle('border-indigo');
      borderArrow.classList.toggle('border-grey');
      borderArrow.classList.toggle('bg-indigo');

      if (borderArrow.classList.contains('border-indigo')) {
        arrow.setAttribute('stroke', 'white');
        borderArrow.classList.add('round-item');
      } else {
        arrow.setAttribute('stroke', '#606F7B');
        borderArrow.classList.remove('round-item');
      }

      console.log(borderArrow.classList.contains('border-grey'));
    });
  });
});
