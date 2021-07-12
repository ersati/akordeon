// Import stylesheets
import './style.css';

const svgs = document.querySelectorAll('article div svg');

function findElements(element) {
  const arrow = element;
  const borderAroundArrow = element.parentNode;
  const header = element.parentNode.parentNode;
  const borderAroundSection = element.parentNode.parentNode.parentNode;
  const textWrapper = header.nextElementSibling;
  const mainText = header.firstElementChild;

  return [
    arrow,
    borderAroundArrow,
    header,
    borderAroundSection,
    textWrapper,
    mainText
  ];
}

function showText(elements) {
  const arrow = elements[0];
  const border = elements[1];
  const header = elements[2];
  const borderAroundSection = elements[3];
  const textWrapper = elements[4];
  const mainText = elements[5];

  arrow.style.transform = 'rotate(0deg)';
  arrow.setAttribute('stroke', 'white');

  border.classList.remove('border-transparent');
  border.classList.remove('bg-grey-lightest');
  border.classList.remove('border-grey');
  border.classList.add('border-indigo');
  border.classList.add('bg-indigo');
  borderAroundSection.classList.remove('border-transparent');
  borderAroundSection.classList.add('border-indigo');
  borderAroundSection.classList.add('bg-grey-lightest');

  mainText.classList.remove('text-grey-darkest');
  mainText.classList.add('text-indigo');

  if (textWrapper == null || textWrapper == undefined) {
    console.log('element not exist');
  } else {
    textWrapper.style.transition = '.5s';

    textWrapper.style.visibility = 'visible';
    textWrapper.style.opacity = '1';
    textWrapper.style.height = '100%';
  }
}

function hideText(elements) {
  const arrow = elements[0];
  const border = elements[1];
  const header = elements[2];
  const borderAroundSection = elements[3];
  const textWrapper = elements[4];
  const mainText = elements[5];
  arrow.setAttribute('stroke', '#606F7B');

  border.classList.remove('border-indigo');
  border.classList.remove('bg-indigo');
  border.classList.add('bg-grey-lightest');
  border.classList.add('border-grey');

  borderAroundSection.classList.remove('border-indigo');
  borderAroundSection.classList.remove('bg-grey-lightest');

  mainText.classList.remove('text-indigo');
  mainText.classList.add('text-grey-darkest');

  if (textWrapper == null || textWrapper == undefined) {
    console.log('element not exist');
  } else {
    textWrapper.style.transition = '.5s';
    textWrapper.style.opacity = '0';
    textWrapper.style.visibility = 'hidden';
    textWrapper.style.height = '0';
  }
}
svgs.forEach(el => {
  const elements = findElements(el);
  if (el.dataset.bool == 'true') {
    showText(elements);
  } else {
    hideText(elements);
  }
  el.dataset.bool = 'false';
  el.addEventListener('click', () => {
    svgs.forEach((el, i) => {
      const elements = findElements(el);
      hideText(elements);
    });
    el.dataset.bool = 'true';
    const info = findElements(el);
    showText(info);
  });
});
