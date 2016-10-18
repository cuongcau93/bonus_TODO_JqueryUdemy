$(document).ready(function(){
    $('.add').click(function(){
        checkInput();  
    });
});

function checkInput(){
    let value = $('.myInput').val();
    if(value == null || value==''){
        alert('Please enter a todo');
        return false;
    }
    
    $('#todo').append("<li class = 'output'> "+value+" &nbsp &nbsp<button id = 'move'> &times;</button></li>");
    $('.myInput').val('');
    
    $(document).on( "click", "li, button#move", function() {
        $(this).hide();
        //$('li>button').hide();
    }); 
}

function remove(){
     $(this).parent().remove();
}



