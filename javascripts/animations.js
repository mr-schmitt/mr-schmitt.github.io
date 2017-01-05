$(document).ready(function(){
$("img").hover(function(){
   $(this).animate({
        opacity: '0.5',
        //height: '70px',
       // width: '70px'
    });
    $(this,"table").animate({
       // add gray background to the table of the highlighted image
       background: "gray"
    });
},
function(){
    $(this).animate({
        opacity: '1',
        //height: '64px',
        //width: '64px'
        });
    }); 
});



function slideInTables(){
    $(document).ready(function(){
        document.getElementById("projects").innerHTML = 5 + 6;
        // slide in the table
    });
}

function cascadeTables(){
    // grab the tables one by one and cascade them for the slide in tables function
}