// TODO - use JSON file to hold all project data
// TODO - add divs for tag names in table generation
// TODO - update image sizes to be constant

var projectList = [
        {title : "Game Development 1 - Example Student Project", tags : ["Unity", "C#", "Curriculum"], text : "Example final project for the Youth Digital <a href='http://www.youthdigital.com/3d-game-development-1'>Game Development 1</a> course.", icon : "img/ud164.png", id : "gd1", link: "https://mr-schmitt.github.io/UD1WebGLBuild/"},
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
            document.getElementById("projects").insertAdjacentHTML("beforeEnd", "<tr><td><a href ='" + projArray[i].link + "'><img src='" + projArray[i].icon +"'></a></td><td><h3><a id='"+ projArray[i].id + "' class='anchor' href='#" + projArray[i].id + "' aria-hidden='true'><span aria-hidden='true' class='octicon octicon-link'></span></a>" + projArray[i].title + "</h3><p>" + projArray[i].text + "</p></td></tr>");
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