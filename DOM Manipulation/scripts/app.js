const userEntry = document.querySelector('input');
const myButton = document.querySelector('button');
const myList = document.querySelector('ul');

myButton.addEventListener('click', () => {
    const myItem = userEntry.value;
    userEntry.value='';

    const myEntry = document.createElement('li');
    const listText = document.createElement('span');
    const dltButn = document.createElement('button');

    myEntry.appendChild(listText);
    listText.textContent = myItem;
    myEntry.appendChild(dltButn);
    dltButn.textContent = "❌";
    myList.appendChild(myEntry);

    dltButn.addEventListener('click', () => {
        myList.removeChild(myEntry);
    });


});