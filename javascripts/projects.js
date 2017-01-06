// TODO - add an object to hold all projects
// TODO - add some basic error handling for table creation
// TODO - createTable function should create all tables from parent project object



var gd1 = {
        title : "Game Development 1 - Example Student Project",
        tags : ["Unity", "C#", "Curriculum"],
        text : "Example final project for the Youth Digital <a href='http://www.youthdigital.com/3d-game-development-1'>Game Development 1</a> course.",
        icon : "img/ud164.png",
        id : "gd1",
        link: "https://mr-schmitt.github.io/UD1WebGLBuild/"
};

var ballGame = {
    title : "RollerBall Game",
    tags : ["Unity", "C#"],
    text : "Simple game built with Unity",
    icon : "img/ball64.png",
    id : "ball-game",
    link: "https://mr-schmitt.github.io/ball-game"
};

var molarSystem = {
    title : "The Molar System",
    tags : ["Unity", "C#"],
    text : "Mostly accurate interactive Solar System replica",
    icon : "img/molar64.png",
    id: "molar-system",
    link : "https://mr-schmitt.github.io/molar-system"
};

var pong = {
    title : "Two-Player Pong Game",
    tags : ["JS"],
    text : "In-browser game built using Superpowers",
    icon : "img/pong64.png",
    id: "pong",
    link : "https://mr-schmitt.github.io/pong-sp"
};

function createTable(proj){
    // add all HTML necessary for project table
    document.getElementById("projects").insertAdjacentHTML("beforeEnd", "<tr><td><a href ='" + proj.link + "'><img src='" + proj.icon +"'></a></td><td><h3><a id='"+ proj.id + "' class='anchor' href='#" + proj.id + "' aria-hidden='true'><span aria-hidden='true' class='octicon octicon-link'></span></a>" + proj.title + "</h3><p>" + proj.text + "</p></td></tr>");
}

createTable(gd1);
createTable(ballGame);
createTable(molarSystem);
createTable(pong);