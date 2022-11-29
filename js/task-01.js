const itemsEl = document.querySelectorAll('.item');

console.log('Number of categories: ', itemsEl.length);
console.log('');

itemsEl.forEach(item => {
  console.log('Category: ', item.querySelector('h2').textContent);
  console.log('Elements: ', item.querySelectorAll('li').length);
  console.log('');
});
