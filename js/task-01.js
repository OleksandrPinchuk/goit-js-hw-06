const liItemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, liItemEl.length);

liItemEl.forEach(item => {
    console.log(`Category:`, item.firstElementChild.textContent);
    console.log(`Elements:`, item.lastElementChild.children.length);
});