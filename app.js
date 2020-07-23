var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)


    li.appendChild(liText)
    list.appendChild(li)
    todo_item.value = ""

    var del = document.createElement("button");
    var delText = document.createTextNode("Delete");
    del.appendChild(delText);
    del.setAttribute("onclick", "deleteItem(this)")
    li.appendChild(del);

    var edit = document.createElement("button");
    var editText = document.createTextNode("Edit");
    edit.appendChild(editText)
    li.appendChild(edit)
    edit.setAttribute("onclick" , "editItem(this)");

}

function deleteItem(e) {

    e.parentNode.remove()

}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var editValue = prompt("Enter edit Value",val);
    var val = e.parentNode.firstChild.nodeValue;
    e.parentNode.firstChild.nodeValue = editValue;
}