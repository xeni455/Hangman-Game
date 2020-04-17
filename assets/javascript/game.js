// array of items to be guessed
const bands = [
    "queen",
    "korn",
    "shakira",
    "three doors down",
    "rolling stones",
    "portugal the man"
];
// empty array to hold the name in uderscores
let underArr = [];
// random choice of a band
let rdm = bands[Math.floor(Math.random() * bands.length)]
// swtich to operate the game
let swtc = false;
//loop to iterate through the randomly selected band

for (let i = 0; i < rdm.length; i++) {
    if (rdm.charAt(i) == " ") {
        underArr.push(" ");
    } else {
        underArr.push("_");
    }
    
}

document.onkeyup = function () {

    //We start the game and 
    //insert underscores in the underArr
    if (event.keyCode == 13) {
        let undArr = underArr.join(" ")
        document.getElementById("bandName").innerHTML = undArr;
        swtc = true;
    }
    // if event key is a letter we add it to the array
    if (swtc) {
        let andArr = underArr;
        console.log(underArr + " this position")
        for(let j = 0; j < rdm.length; j++){
            if(event.key == rdm.charAt(j)) {               
            underArr[j] = rdm.charAt(j);          
            }
        }
        
        andArr = underArr.join(" ").trim()
        document.getElementById("bandName").innerHTML = andArr;
    }


}