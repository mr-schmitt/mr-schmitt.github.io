var projectList = [
        {title : "The Machine's Garden", year : "2020", role: "Developer/Designer", tag : ["design", "audio"], text : "Use the intelligence of a decommissioned military supercomputer to solve puzzles and guide the lives of humble villagers. Steam, iOS, Android", icon : "img/tmg-400w-300h.png", link: "https://store.steampowered.com/app/1317310/The_Machines_Garden/"},
        {title : "Snailboat Mobile", role:"Developer/Designer", year : "2019", tag : ["code", "design", "audio"], text : "A short and sweet puzzle game for Android and iOS", icon : "img/snailboat-mockups.png", link: "https://toomuchtomato.itch.io/snailboat-mobile"},
        {title : "Game Development Courses", role: "Instructional Designer", year : "2015-2017", tag : ["code", "design", "art"], text : "Online courses in Game Development, Unity, and Minecraft modding", icon : "img/MD1D2.png", link : "https://www.apexlearning.com/technology-courses"},
        {title : "Duncan's Flying Tugboat", role: "Developer/Designer", year : "2019", tag : ["code", "art"], text : "An interactive storybook coming soon for iOS", icon : "img/DFT.png", link: "https://www.skyfarminteractive.com/"},
        {title : "Jam Games", year : "", role: "Developer/Designer", tag : ["code", "design","audio", "art"], text : "A collection of odd games created in game jams", icon : "img/chickentender.png", link: "https://toomuchtomato.itch.io"},
        {title : "Ball's Revenge", year : "2017", role:"Programmer", tag : ["code"], text : "A quirky arcade-style game for Android and iOS about an alien named Ball", icon : "img/ballsrevenge.png", link: "https://appadvice.com/app/balls-revenge/1042846980"},
        {title : "Entropy", year : "2017", role: "Developer/Designer", tag : ["code", "design", "audio", "art"], text : "A short adventure/puzzle game with fun music and philosophical oddball characters", icon : "img/entropy.png", link: "https://toomuchtomato.itch.io/entropy"}

        // images should be 400w x 300h

        // defunct projects
        //{title : "Chicken Tender", year : "2017", tag : ["code", "design","audio", "art"], text : "Tend to your flock! A silly agricultural simulator.", icon : "img/chickentender.png", link: "https://toomuchtomato.itch.io/chicken-tender"},
        //{title : "Game Development 1", year : "2016", tag : ["code", "design"], text : "An online course in Unity 3D Game development and C# programming", icon : "img/UD1.png", link: "https://www.apexlearning.com/technology-courses"},
        //{title : "Server Design 1", year : "2015", tag : ["code", "design"], text : "An online course in Java Programming. Learn to create your own Minecraft Server", icon : "img/SD1.png", link : "https://www.apexlearning.com/technology-courses"},
        //{title : "Snailboat", year : "2017", tag : ["code", "design", "audio"], text : "Set snail for adventure! A challenging grid-based puzzle game.", icon : "img/snailboat.png", link: "https://toomuchtomato.itch.io/snailboat"},
        //{title : "Bowel MOOvement", year : "2018", tag : ["code", "design", "audio", "art"], text : "Navigate tricky platforming challenges in this artsy web game.", icon : "img/bm-portfolio.png", link: "https://toomuchtomato.itch.io/bowel-moovement"},

        //{title : "Art & Design Portfolio", year : "2018", tag : ["art"], text : "A gallery of Michael's illustration, animation, and design work", icon: "img/comic.png", link : "https://imgur.com/a/uIJ7V"}
        //{title : "Mr.Stripey", year : "2013-2018", tag : ["audio"], text : "A collection of music composed, recorded, and or produced by Michael", icon: "img/mrs.png", link : "https://misterstripey.bandcamp.com"}

        //{title : "Professions - EP", year : "2016", tag : ["audio"], text : "An EP of experimental music and covers", icon : "img/professions.png",  link : "https://misterstripey.bandcamp.com/album/professions"}
        //{title : "Hello Michael!", year : "2014", tag : ["design"], text : "A blog about my experiences teaching English in rural Japan", icon : "img/hellomichael.png",  link : "http://hellomaikeru.blogspot.com/"},
        //{title : "Mr.Stripey's Garden", year : "2016", tag : ["design"], text : "A blog with odd writings and musings", icon : "img/mrstripey.PNG",  link : "http://misterstripey.blogspot.com/"}
        //{title : "The Molar System", year : "2015", tag : ["code", "design", "audio"], text : "", icon : "img/snailboat.PNG", id: "molar-system", link : "https://mr-schmitt.github.io/molar-system"},
        //{title : "About Page",tags : ["JS", "Web"], text : "Made a landing page for my portfolio, timeline, and CV. Friendlier on the eyes.", icon : "img/about64.png", id: "about", link : "https://mr-schmitt.github.io/about"},
        //{title : "BeetleTank", year : "2017", tags : ["Unity", "GameDev"], text : "A game designed, programmed, and asset-ed in a week as a part of Game-A-Week", icon : "img/bt64.png", id : "sw", link: "https://toomuchtomato.itch.io/beetletank"},
        //{title : "RollerBall Game", year : "2016", tags : ["Unity", "C#"], text : "Simple game built with Unity", icon : "img/ball64.png", id : "ball-game", link: "https://mr-schmitt.github.io/ball-game"},
        //{title : "Two-Player Pong Game", year : "2016", tags : ["JS"], text : "In-browser game built using Superpowers", icon : "img/pong64.png", id: "pong", link : "https://mr-schmitt.github.io/pong-sp"},
        //{title : "Gardening - EP", year : "2017", tag : ["audio"], text : "An EP of experimental music", icon : "img/gardening.png",  link : "https://misterstripey.bandcamp.com/album/gardening"},
        //{title : "Hole - EP", year : "2015", tag : ["audio"], text : "An EP of electronic music", icon : "img/hole.png",  link : "https://misterstripey.bandcamp.com/album/hole"}

    ];


/* global generateTables */
function generateProjectEntries(projArray){
    document.getElementById("projects").innerHTML= "";
    for (var i = 0; i < projArray.length; i ++){
        if (projArray[i].title == null || projArray[i].year == null || projArray[i].icon == null ||  projArray[i].text == null || projArray[i].tag == null){
            console.log("Could not find data for project " + projArray[i] + ".  Skipping table entry.");
        } else {
            // add all HTML necessary for project entry
            document.getElementById("projects").insertAdjacentHTML("beforeEnd",
                "<figure class='white'><a href='" + projArray[i].link + "'>" +
                "<img src='" + projArray[i].icon + "' />" +
                "<dl><dt>" + projArray[i].title + "</dt>" +
                "<dd>" + projArray[i].role + "</dd><hr>" +
                "<dd>" + projArray[i].text + "</dd></dl></a>" +
                "<div id = 'wrapper-part-info'><div id = 'part-info'>" +
                /*icons*/ "</div></div></figure>"
            );
        }
    }
}

function printIcons(iconArray){
    var stringOutput = "";
    // for (var i in iconArray){
    //     switch(iconArray[i]){
    //         case "code":
    //             stringOutput += "<i class='fas fa-code' title='Development'></i>    ";
    //             break;
    //         case "design":
    //             stringOutput += "<i class='far fa-file-alt' title='Design/Writing'></i>    ";
    //             break;
    //         case "audio":
    //             stringOutput += "<i class='fas fa-music' title='Audio'></i>    ";
    //             break;
    //         case "art":
    //           stringOutput += "<i class='fas fa-paint-brush' title='Art'></i>    ";
    //         default:
    //             break;
    //     }
    // }
    return stringOutput;
}

function filterProjects(filter){
    document.getElementsByClassName("top-rated object")[0].className = "recent object";
    document.getElementById("filter-" + filter).children[0].children[0].className = "top-rated object";
    if (filter == "all"){
        generateProjectEntries(projectList);
    } else {
        var selectedProjects = [];
        for (var i = 0; i < projectList.length; i ++){
            if (projectList[i].title == null || projectList[i].year == null || projectList[i].icon == null ||  projectList[i].text == null || projectList[i].tag == null){
                console.log("Could not find data for project " + projectList[i] + ".  Skipping filter.");
            } else {
                for (var tagToCheck in projectList[i].tag){
                    if (projectList[i].tag[tagToCheck] == filter){
                       selectedProjects.push(projectList[i]);
                    }
                }
            }
        }
        generateProjectEntries(selectedProjects);
    }
}
