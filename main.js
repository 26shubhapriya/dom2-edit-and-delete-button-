var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemsList.addEventListener('click',removeItem);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.classList = 'list-group-item';
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteButton = document.createElement('button');
    //add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteButton.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteButton);
    //append li to list
    itemsList.appendChild(li);

    //create edit button element
    var editBtn = document.createElement('button');
    //add classes to edit button
    editBtn.className = 'btn btn-info btn-sm float-right edit';
    //append text node
    editBtn.appendChild(document.createTextNode('edit'));
    //append button to li
    li.appendChild(editBtn)
    //append li to list
    itemsList.appendChild(li);

    itemsList.appendChild(li);

}

//remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}