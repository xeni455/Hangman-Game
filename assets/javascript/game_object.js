// array of items to be guessed
const musicalBands = {
    queen: '<iframe class="embed-responsive-item" width="420" height="345" src="https://www.youtube.com/embed/FGcgkD9OURk"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    korn: '<iframe class="embed-responsive-item" width="420" height="345" src="https://www.youtube.com/embed/uAq6RjSuwXQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    "shakira": '<iframe class="embed-responsive-item" width="420" height="345" src="https://www.youtube.com/embed/6Mgqbai3fKo"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    "three doors down": '<iframe class="embed-responsive-item" width="420" height="345" src="https://www.youtube.com/embed/kPBzTxZQG5Q"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    "rolling stones": '<iframe class="embed-responsive-item" width="420" height="345" src="https://www.youtube.com/embed/BinwuzZVjnE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    "portugal the man": '<iframe class="embed-responsive-item" width="420" height="345" src="https://www.youtube.com/embed/pBkHHoOIIn8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
};
// empty array to hold the name in uderscores
let underArr = [];
// random choice of a band
let bands = Object.keys(musicalBands);
let rdm = bands[Math.floor(Math.random() * bands.length)]
// swtich to operate the game
let swtc = false;
//loop to iterate through the randomly selected band
let counter = 15;

let wins = 0;
// let snd1 = new Audio('../sounds/253177__suntemple__retro-accomplished-sfx.wav');
// let snd2 = new Audio('../sounds/274180__littlerobotsoundfactory__jingle-win-synth-00.wav')

// function play1(){
//     snd1.play();
// }
// function play2(){
//     snd2.play();
//}
let obj = {
    underFunction() {
        for (let i = 0; i < rdm.length; i++) {
            if (rdm.charAt(i) == " ") {
                underArr.push(" ");
            } else {
                underArr.push("_");
            }

        }
    },
    startFunction() {
        let undArr = underArr.join(" ")
        document.getElementById("bandName").innerHTML = undArr;
        swtc = true;
        document.getElementById("counter").innerHTML = "You still have: " + counter + " chances left.";
        document.getElementById("congratulate").innerHTML = "Good Luck.";
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("presentation").style.display = "none";
        document.getElementById("mainContent").style.visibility = "visible";
        document.getElementById("mainContent").style.width = "100%";
        document.getElementById("video").style.width = "1px";
        document.getElementById("pic").style.width = "100%";


    },
    playFunction() {

        let andArr = underArr;
        console.log(underArr + " this position")
        for (let j = 0; j < rdm.length; j++) {
            if (event.key == rdm.charAt(j)) {
                underArr[j] = rdm.charAt(j);
                document.getElementById('audio1').play();
            }
        }

        andArr = underArr.join(" ").trim()
        document.getElementById("bandName").innerHTML = andArr;
        console.log(rdm);
        console.log(andArr);
        let equalityFunction = function () {
            if (andArr == rdm.split("").join(" ")) {
                wins++;
                document.getElementById("congratulate").innerHTML = "Well done! Press enter to Play again.";
                document.getElementById("wins").innerHTML = "Wins: " + wins;
                document.getElementById("video").innerHTML = musicalBands[rdm];
                document.getElementById("video").style.width = "100%";
                document.getElementById("pic").style.width = "1px";
                document.getElementById('audio').play();
                underArr = [];
                rdm = bands[Math.floor(Math.random() * bands.length)]
                swtc = false;
                counter = 15;
                wins++;
            }
        }
        document.getElementById("counter").innerHTML = "You still have: " + counter + " chances left.";
        counter--;

        equalityFunction();
    },
    reset() {
        underArr = [];
        rdm = bands[Math.floor(Math.random() * bands.length)]
        swtc = false;
        counter = 15;
    }
};


document.onkeyup = function () {
    if (event.keyCode == 13 && swtc == false) {
        obj.underFunction();
        obj.startFunction();

    }
    if (swtc && counter >= 1) {
        obj.playFunction();
    } else {
        document.getElementById("congratulate").innerHTML = "Game over, press Enter to try again.";
        obj.reset();
    }




}