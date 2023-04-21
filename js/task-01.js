const ulCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulCategories.length}`);

ulCategories.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);

  console.log(`Elements: ${el.lastElementChild.querySelectorAll('li').length}`);
});
