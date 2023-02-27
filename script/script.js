var yourclass, yourname, yourfamily, selection1, selection2;

var END = '\n';

yourclass = null;
yourname = null;
yourfamily = null;

if(selection1 = confirm("No text" + END + "Yes or No?")) {
    yourname = prompt("Enter your name");
    yourfamily = prompt("Enter your last name");
    yourclass = prompt("Enter your class");

    if(!yourclass || !yourname || !yourfamily) {
        alert("You have not entered all the data, please refresh the page");
    }
}
else {
    if(!selection1) {
        alert("You refused to verify the data. Reload the page");
    }
}

if(yourclass && yourname && yourfamily) {
    selection2 = confirm("Text" + END + "Your name - " + yourname + END + "Your last name - " + yourfamily + END + "Your class - " + yourclass + END + "Is that right?")

    if(!selection2) {
        alert("You refused to verify the data. Reload the page");
    }
}

var cplpl, pyth, csh, javs, typs, selection3;

if(selection2) {
    selection3 = confirm("Next, you will be asked questions about programming languages, are you ready?")

    cplpl = confirm("Do you prefer the language C++?");
    pyth = confirm(" Do you prefer the language Pythone?");
    csh = confirm("Do you prefer the language C#?");
    javs = confirm("Do you prefer the language JavaScript?");
    typs = confirm("Do you prefer the language TypeScript?");

    var lclplpl, lpyth, lcsh, ljavs, ltyps;

    if(cplpl) {
        function cplplyes() {
            lclplpl = prompt("Describe what you like about 'C++'");

        }
        cplplyes();
    }
    if(pyth) {
        function pythyes() {
            lpyth = prompt("Describe what you like about 'Pythone'");
        }
        pythyes();
    }
    if(csh) {
        function cshyes() {
            lcsh = prompt("Describe what you like about 'C#'");
        }
        cshyes();
    }
    if(javs) {
        function javsyes() {
            ljavs = prompt("Describe what you like about 'JavaScript'");
        }
        javsyes();
    }
    if(typs) {
        function typsyes() {
            ltyps = prompt("Describe what you like about 'TypeScript'");
        }
        typsyes();
    }

    if(!selection3) {
        alert("You refused to verify the data. Reload the page");
    }
}


// database

console.log(yourname);
console.log(yourfamily);
console.log(yourclass);

console.log(cplpl);
console.log(pyth);
console.log(csh);
console.log(javs);
console.log(typs);