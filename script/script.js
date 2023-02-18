var yourclass, yourname, yourfamily, selection1, selection2;

var END = '\n';

yourclass = null;
yourname = null;
yourfamily = null;

if(selection1 = confirm("No text" + END + "Yes or No?")) {
    yourname = prompt("YourName");
    yourfamily = prompt("YourFamily");
    yourclass = prompt("Yourclass");

    if(!yourclass || !yourname || !yourfamily) {
        alert("Text");
    }
}
else {
    if(!selection1) {
        alert("Please reload the page");
    }
}

if(yourclass && yourname && yourfamily) {
    selection2 = confirm("Text" + END + "YourName - " + yourname + END + "YourFamily - " + yourfamily + END + "YourClass - " + yourclass + END + "Okay?")

    if(!selection2) {
        alert("Please reload the page");
    }
}

var cplpl, pyth, csh, javs, typs, selection3;

if(selection2) {
    selection3 = confirm("Programming language" + END + "Yes or No?")

    cplpl = confirm("C++?");
    pyth = confirm("Pythone?");
    csh = confirm("C#?");
    javs = confirm("JavaScript?");
    typs = confirm("TypeScript?");

    var lclplpl, lpyth, lcsh, ljavs, ltyps;

    if(cplpl) {
        function cplplyes() {
            lclplpl = prompt("Text");

        }
        cplplyes();
    }
    if(pyth) {
        function pythyes() {
            lpyth = prompt("Text");
        }
        pythyes();
    }
    if(csh) {
        function cshyes() {
            lcsh = prompt("Text");
        }
        cshyes();
    }
    if(javs) {
        function javsyes() {
            ljavs = prompt("Text");
        }
        javsyes();
    }
    if(typs) {
        function typsyes() {
            ltyps = prompt("Text");
        }
        typsyes();
    }

    if(!selection3) {
        alert("Please reload the page");
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