var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemsList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var newDes = document.getElementById('item2').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.classList = 'list-group-item';
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));
    //adding description in next line
    var br = document.createElement("br");
    li.appendChild(br);
    //add textnode with input value for description
    li.appendChild(document.createTextNode(newDes));

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

//filter item
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemsList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var descName = item.childNodes[2].textContent;
        //console.log(item);
        if(itemName.toLowerCase().indexOf(text) != -1 || descName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

}