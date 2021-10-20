const content = document.querySelector('#content');

function shoppingList(arrayOfPeople) {

    const list = document.createElement('ul');

    arrayOfPeople.forEach((shoppingItem) => {
        const item = document.createElement('li');
        item.innerText = shoppingItem;
        list.appendChild(item);
    });

    content.appendChild(list);
}

let shopping = ['Milk', 'cheese', 'Eggs', 'Cake', 'Sugar'];

shoppingList(shopping);