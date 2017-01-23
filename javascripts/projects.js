// TODO - use JSON file to hold all project data
// TODO - add tag names in table generation

var projectList = [
        {title : "Game Development 1", tags : ["Unity", "C#", "Curriculum"], text : "A course in C# and Unity Game Development on the <a href='http://www.youthdigital.com/3d-game-development-1'>Youth Digital</a> learning platform.  See an example final project <a href='https://mr-schmitt.github.io/UD1WebGLBuild/'>here</a>.", icon : "img/ud164.png", id : "gd1", link: "http://www.youthdigital.com/3d-game-development-1"},
        {title : "About Page",tags : ["JS", "Web"], text : "A landing page for my Portfolio, Timeline, and CV. Friendly on the eyes.", icon : "img/about64.png", id: "about", link : "https://mr-schmitt.github.io/about"},
        {title : "RollerBall Game", tags : ["Unity", "C#"], text : "Simple game built with Unity", icon : "img/ball64.png", id : "ball-game", link: "https://mr-schmitt.github.io/ball-game"},
        {title : "The Molar System",tags : ["Unity", "C#"], text : "Interactive \"Solar System\" replica", icon : "img/molar64.png", id: "molar-system", link : "https://mr-schmitt.github.io/molar-system"},
        {title : "Two-Player Pong Game", tags : ["JS"], text : "In-browser game built using Superpowers", icon : "img/pong64.png", id: "pong", link : "https://mr-schmitt.github.io/pong-sp"},
        {title : "Mod Design : Dimensions", tags : ["Java", "Curriculum"], text : "A Minecraft Modding course on the <a href='http://www.youthdigital.com/mod-design-1-dimensions'>Youth Digital</a> learning platform.", icon : "img/md1d64.png", id : "md1d", link : "http://www.youthdigital.com/mod-design-1-dimensions"},
        {title : "Server Design 1", tags : ["Java", "Curriculum"], text : "A Minecraft Server programming course on the <a href='http://www.youthdigital.com/mod-design-1-dimensions'>Youth Digital</a> learning platform.", icon : "img/sd164.png", id : "sd1", link : "http://www.youthdigital.com/server-design-1"}
    ];

function generateTables(projArray){
    document.getElementById("projects").innerHTML= "";
    for (var i = 0; i < projArray.length; i ++){
        if (projArray[i].title == null || projArray[i].text == null || projArray[i].icon == null){
            console.log("Could not find data for project " + projArray[i] + ".  Skipping table entry.");
        } else {
            // add all HTML necessary for project table
            document.getElementById("projects").insertAdjacentHTML("beforeEnd", 
            // setup the table
            "<tr style = 'position:relative;' class = 'project' id = 'row" + i + "'><td>" +
            // image & link in first column
            "<a href ='" + projArray[i].link + "'>" + "<img src='" + projArray[i].icon +"'></a></td>" +
            // header and paragraph in a new column
            "<td><h3>" + projArray[i].title + "</h3>" +
            "<p>" + projArray[i].text + "</p></td></tr>");

            /* trigger the animation
            $(document).on("each", "#row"+i, function(){
                $(this).hide().fadeIn(i * 1000);
            });*/
        }
    }
}

function sortTable (projArray, sortBy){
    var selectedArray= [];
    
    for (var i = 0; i < projArray.length; i ++){
        if (projArray[i].title == null || projArray[i].text == null || projArray[i].icon == null){
            console.log("Could not find data for project " + projArray[i] + ".  Skipping table sorting.");
        } else {
            for (var count = 0; count < projArray[i].tags.length; count ++){
                if (projArray[i].tags[count] == sortBy){
                    selectedArray.push(projArray[i]);
                }
            }
        }
    }
    generateTables(selectedArray);
}