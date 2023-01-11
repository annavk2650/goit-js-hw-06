const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector('.gallery');

const makeGallery = function (images) {
  return `
  <li>
    <img
      src = '${images.url}'
      alt = '${images.alt}'
    >
  </li>
  `;
};
const element = images.map((el, index, array) => makeGallery(el));

list.insertAdjacentHTML('beforeend', element.join(''));

list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.justifyContent = 'space-between';
list.style.flexWrap = 'wrap';
list.style.padding = '0';
list.style.margin = '0';

// const element = images.map(image => {
//   const elLi = `<li>
//     <img
//       src = '${images.url}'
//       alt = '${images.alt}'
//     >
//   </li>`;
//   return elLi;
// });
// list.insertAdjacentHTML('beforeend', element.join(''));
