
const add = document.querySelector("#btn");
const list = document.querySelector("#list");
let itemArray = [];


add.onclick = function () {
    const item = document.querySelector("#todovalue").value;
    let text = document.createTextNode(item);
    let listitem = document.createElement('li');

    listitem.appendChild(text);
    list.appendChild(listitem);

    document.forms.myfrm.reset();

    

    if (localStorage.getItem('todoList') === null) 
    {
        itemArray = [];
        localStorage.setItem('todoList', JSON.stringify());
    }
    else
    {
        itemArray = JSON.parse(localStorage.getItem('todoList'));
    }

    itemArray.push(item)
    localStorage.setItem('todoList', JSON.stringify(itemArray));
  
}

window.onload = function () 
{

    if (localStorage.getItem('todoList') === null) 
    {
        var listItem = [];
        localStorage.setItem('todoList', JSON.stringify());
    }
    else 
    {
        var data = JSON.parse(localStorage.getItem('todoList'));
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            var name = data[i];
            var itemtxt = document.createTextNode(data[i]);
            let listitem = document.createElement('li');

            listitem.appendChild(itemtxt);
            list.appendChild(listitem);
        }

    }
}




function remove() 
{
    var list1 = document.getElementById("list");
    list1.removeChild(list1.childNodes[list1.childNodes.length - 1]);

    itemArray.splice(list1.childNodes.length - 1, 1);
    localStorage.setItem('todoList', JSON.stringify(itemArray))

}

function clears()
{
    localStorage.clear();
}