var clickBtn = document.querySelector('.sec-1');
// console.log(clickBtn);

clickBtn.addEventListener('submit', addTask);


function addTask(e) {
    e.preventDefault();
    console.log(e);
    //to target main div
    var listHeead = document.querySelector('.list-head');

    //to get the textbox value
    var newItem = document.getElementById('item').value.toUpperCase();
    //to creat a div inside main
    var listItem = document.createElement('div');
    //to addclass to that div
    listItem.className = 'list-item';
    //to create a list item inside that div
    var listHead = document.createElement('li');
    //to craete a button 
    var doneButton = document.createElement('button');

    document.getElementById('item').value="";


    doneButton.className = 'btn done';

    doneButton.appendChild(document.createTextNode('✔'));

    var undoneButton = document.createElement('button');

    undoneButton.className = 'btn undone';

    undoneButton.appendChild(document.createTextNode('✖'));

    var deleteButton = document.createElement('button');

    deleteButton.className = 'btn ';

    deleteButton.appendChild(document.createTextNode('🗑'));

    console.log(listHeead);

    if (newItem.length == 0) {
        alert('Please add a value');
        listItem.className='hidden';
    }


    doneButton.addEventListener('click', addDone);

    function addDone() {
        listItem.className = 'list-item done ';
        
    }

    undoneButton.addEventListener('click', addNotDone)

    function addNotDone() {
        listItem.className = 'list-item undone';
    }

    deleteButton.addEventListener('click', adddDelete)
    function adddDelete() {
        alert('Are you sure');
        listHeead.removeChild(listItem);
    }


    listHead.appendChild(document.createTextNode(newItem));
    listItem.appendChild(listHead);
    listItem.appendChild(doneButton);
    listItem.appendChild(undoneButton);
    listItem.appendChild(deleteButton);


    listHeead.appendChild(listItem);


}


