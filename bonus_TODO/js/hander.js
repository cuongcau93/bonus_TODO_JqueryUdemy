
$('.blink').hide(1500);
$('.blink').show(1500);

$('.blink').slideUp(2000);

$('.blink').slideDown(1000);



var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');


//remove all button

$('#removeall').click(function(){
    $('#list').text('');
})

//adding a new list element

$('#add').click(function(){
    addlis(list);
    $('#userinput').val('');
    $('input').focus();
    
})

function addlis(targetUl){
    let inputText = $('#userinput').val();
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');
    
    if(inputText !== ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = ' &times; ';
        removeButton.setAttribute('onclick', 'removeMe(this)');
        
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    } else {
        alert("Please enter a todo");
    } 
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}













