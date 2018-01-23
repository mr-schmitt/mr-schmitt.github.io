// TODO - use JSON file to hold all project data
// TODO - add tag names in table generation

var projectList = [
        {title : "Ball's Revenge", tags : ["Unity", "GameDev"], text : "Programmed, debugged, and published a mobile game for <a href = 'https://play.google.com/store/apps/details?id=com.Suraksham.BallsRevenge'>Android</a> and <a href='https://itunes.apple.com/fj/app/balls-revenge/id1042846980?mt=6&ign-mpt=uo%3D2%253Fat%253D1l3vbEu'>iOS</a>.", icon : "img/br64.png", id : "br", link: "https://play.google.com/store/apps/details?id=com.Suraksham.BallsRevenge"},
        {title : "Game Development 1", tags : ["Unity", "GameDev", "Curriculum"], text : "Designed curriculum for a course in C# and Unity Game Development", icon : "img/ud164.png", id : "gd1", link: "http://www.youthdigital.com/3d-game-development-1"},
        {title : "snailboat", tags : ["Unity", "GameDev"], text : "Made a short puzzle game in 48 hours for the GMTK game jam", icon : "img/sb64.png", id : "en", link: "https://toomuchtomato.itch.io/snailboat"},
        {title : "Chicken Tender", tags : ["Unity", "GameDev"], text : "Created a goofy agricultural similator in 48 hours for Ludum Dare 40", icon : "img/chicken64.png", id : "en", link: "https://toomuchtomato.itch.io/chicken-tender"},
        {title : "Mod Design : Dimensions", tags : ["Java", "Curriculum"], text : "Led a small team to create an online course in Java Programming & Minecraft Modding for kids.", icon : "img/md1d64.png", id : "md1d", link : "http://www.youthdigital.com/expansions.html"},
        {title : "entropy", tags : ["Unity", "GameDev"], text : "Created an adventure game with pixel art, fun music, and whimsical characters", icon : "img/ent64.png", id : "en", link: "https://toomuchtomato.itch.io/entropy"},
        {title : "Server Design 1", tags : ["Java", "Curriculum"], text : "Developed curriculum for an online Minecraft Server programming coursefor kids", icon : "img/sd164.png", id : "sd1", link : "http://www.youthdigital.com/server-design-1"},
        {title : "About Page",tags : ["JS", "Web"], text : "Made a landing page for my portfolio, timeline, and CV. Friendlier on the eyes.", icon : "img/about64.png", id: "about", link : "https://mr-schmitt.github.io/about"},
        //{title : "BeetleTank", tags : ["Unity", "GameDev"], text : "A game designed, programmed, and asset-ed in a week as a part of Game-A-Week", icon : "img/bt64.png", id : "sw", link: "https://toomuchtomato.itch.io/beetletank"},
        {title : "The Molar System",tags : ["Unity", "GameDev"], text : "Created an interactive \"Solar System\" replica", icon : "img/molar64.png", id: "molar-system", link : "https://mr-schmitt.github.io/molar-system"},
        {title : "smallworld", tags : ["Unity", "GameDev"], text : "Designed, programmed, and asset-ed a small game in 48 hours for Ludum Dare 38", icon : "img/sw64.png", id : "sw", link: "https://toomuchtomato.itch.io/smallworld"}

        //{title : "RollerBall Game", tags : ["Unity", "C#"], text : "Simple game built with Unity", icon : "img/ball64.png", id : "ball-game", link: "https://mr-schmitt.github.io/ball-game"},
        //{title : "Two-Player Pong Game", tags : ["JS"], text : "In-browser game built using Superpowers", icon : "img/pong64.png", id: "pong", link : "https://mr-schmitt.github.io/pong-sp"},
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