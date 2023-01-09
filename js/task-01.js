// const categories = document.querySelector('#categories');
// console.log(`Number of categories: ${categories.children.length}`);

// const animals = document.querySelector('.item');
// console.log(`Category: ${animals.firstElementChild.textContent}`);

// const animalEl = animals.querySelectorAll('li');
// console.log(`Elements: ${animalEl.length}`);

// const products = animals.nextElementSibling;
// console.log(`Category: ${products.firstElementChild.textContent}`);

// const productsEl = products.querySelectorAll('li');
// console.log(`Elements: ${productsEl.length}`);

// const tehno = products.nextElementSibling;
// console.log(`Category: ${tehno.firstElementChild.textContent}`);

// const tehnoEl = tehno.querySelectorAll('li');
// console.log(`Category: ${tehnoEl.length}`);

const fullList = document.querySelectorAll('.item');
console.log(`Number of categories: ${fullList.length}`);

fullList.forEach(items => {
  console.log(`Category: ${items.firstElementChild.textContent}`);
  console.log(`Elements: ${items.lastElementChild.children.length}`);
});
