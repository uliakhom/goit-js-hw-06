const items = document.querySelectorAll('.item ul')

console.log(`Number of categories: ${items.length}`)
items.forEach(item => console.log(`Category: ${item.previousElementSibling.textContent}
Elements: ${item.children.length}`)) 
