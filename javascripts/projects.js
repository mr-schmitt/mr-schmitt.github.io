var projects = {
     
     gd1 : {
        name : "Game Development 1 - Example Student Project",
        tags : ["Unity", "C#", "Curriculum"],
        text : "Example final project for the Youth Digital <a href='http://www.youthdigital.com/3d-game-development-1'>Game Development 1</a> course.",
        icon : "img/ud164.png",
        id : "gd1",
        link: "https://mr-schmitt.github.io/UD1WebGLBuild/"
    }
    
};

// Need to add way to access this script from index.html?
function createTable(proj){
    // add all HTML necessary for project table
    document.write("<table><tr><td><a href =" + proj.link + "><img src=" + proj.icon +"></a></td><td><h3><a id="+ proj.id + "class='anchor' href='#" + proj.id + " aria-hidden='true'><span aria-hidden='true' class='octicon octicon-link'></span></a>" + proj.title + "</h3><p>" + proj.text + "</p></td></tr><tr></table>");
    
}