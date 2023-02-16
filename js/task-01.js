const list = document.querySelector('#categories');
const item = list.querySelectorAll('.item')
console.log(`У списку ${item.length} категорії`)
item.forEach(
    node => {
        const title = node.querySelector('h2')
        const list = node.querySelectorAll('li')
        console.log(`В категорії ${title.textContent} знаходяться ${list.length} елементів `)
    });