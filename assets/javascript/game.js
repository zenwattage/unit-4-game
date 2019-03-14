$(document).ready(function () {

        
    $(document).on('click', function() {
        $("#testing").html("Yo you clickin' bitch");
        
    })

    var loopLen = 5;

    
    for(var i = 0; i < loopLen; i++){
        $("#loops").html("<div>","Balls out!");
    }
        
});

