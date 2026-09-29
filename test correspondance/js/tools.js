function upperFirstChar(str) {
    str = str.toLowerCase();
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function fillListPkmn(pkmn) {
    var x = 0;
    document.getElementById("pkmnList").innerHTML = "";
    pkmn.forEach(pkmn => {
        var cards = document.getElementById("pkmnList");
        var a = document.createElement("a");
        var div = document.createElement("div");
        var img = document.createElement("img");
        var divContent = document.createElement("div");
        var aName = document.createElement("a");
        var color = getColor(pkmn.type[0]);
        var num = pkmn.num.toString();
        divContent.className = "content";
        aName.className = "header";
        aName.setAttribute('href', "page.html?id=" + pkmn.num);
        divContent.appendChild(aName);
        a.className = color + " card";
        a.setAttribute('href', "page.html?id=" + pkmn.num);
        aNameTxt = document.createTextNode(pkmn.nom);
        aName.appendChild(aNameTxt);
        div.className = "image";
        img.setAttribute("src", "https://www.serebii.net/pokemonpokopia/pokemon/" + num + ".png");
        div.appendChild(img);
        a.appendChild(div);
        a.appendChild(divContent);
        cards.appendChild(a);
        x += 1;
    });
}

function getColor(type) {
    switch (type) {
        case "plante":
            return "green";
            break;
        case "eau":
            return "blue";
            break;
        case "feu":
            return "red";
            break;
        case "sol":
            return "brown";
            break;
        case "combat":
            return "orange";
            break;
        case "electric":
            return "yellow";
            break;
        case "insect":
            return "olive";
            break;
        case "vol":
            return "teal";
            break;
        case "spectre":
            return "violet";
            break;
        case "poison":
            return "purple";
            break;
        case "psy":
            return "pink";
            break;
        case "fée":
            return "pink";
            break;
        case "roche":
            return "grey";
            break;
        case "ténèbres":
            return "black";
            break;
        case "acier":
            return "grey";
            break;
        case "dragon":
            return "blue";
            break;
        case "normal":
            return "grey";
            break;
        case "glace":
            return "teal";
            break;
    };
};

function randomColor() {
    var rng = Math.floor(Math.random() * 7);
    console.log(rng);
    switch (rng) {
        case 1:
            return "green";
            break;
        case 2:
            return "brown";
            break;
        case 3:
            return "yellow";
            break;
        case 4:
            return "olive";
            break;
        case 5:
            return "violet";
            break;
        case 6:
            return "purple";
            break;
        case 7:
            return "pink";
            break;
    };
};

function changeLabelColor(label, labelColor, color) {  
    if(color == labelColor) {
        labelColor = "violet";
    };
    document.getElementById(label).classList.add(labelColor);
};