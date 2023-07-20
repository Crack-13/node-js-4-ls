const addNewElement = () => {
    let newItem = document.createElement('li')
    newItem.classList.add('list-item')
    let textNode = document.createTextNode('new item one')
    newItem.appendChild(textNode)
    let list = document.getElementById('myList')
    list.appendChild(newItem)
}
// добавляет элемент в конец списка с классом list-item


const addNewElement2 = () => {

    let newItem = document.createElement('li')
    let textNode = document.createTextNode('new item two')
    newItem.prepend(textNode) 
    let list = document.getElementById('myList')
    list.prepend(newItem)
}
// добавляет элемент вначале списка 


const removeElement = () => {

    let removeEl = document.querySelector('li:first-child')
    let list = document.getElementById('myList')
    list.removeChild(removeEl)

}
// удаляет начальный элемент внутри списка myList 


const removeElement2 = () => {

    let removeEl = document.querySelector('li:last-child')
    removeEl.remove()

}
// удаляет элемент в конце списка



const deleteBody = () => {

    let del = document.querySelector('body')
    // del.remove()
    del.innerHTML = ''
    del.style.backgroundColor = 'black'
}
// удаляет все элементы внутри body и делает фон черного цвета