const divs = document.createElement("div");
divs.setAttribute("id", "mainbox");
const para = document.createElement("p");
divs.appendChild(para);

const button = document.createElement("button");
button.innerHTML = "Read Text";
button.id = "ReadMeButton";

const cancelButton = document.createElement("button");
cancelButton.innerHTML = "Stop Read";
cancelButton.id = "MuteMeButton";

divs.appendChild(button);
divs.appendChild(cancelButton);
const element = document.getElementsByTagName("body")[0];
element.appendChild(divs);


const ptags  = document.querySelector('#root article section');

document.getElementById("ReadMeButton").onclick = function() {readText()};
function readText(){
    const childern = ptags.childNodes;
    childern.forEach(ptgs => {
        console.log(ptgs.innerText);
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(ptgs.innerText));
    });
}


document.getElementById("MuteMeButton").onclick = function() {StopText()};
function StopText(){
    window.speechSynthesis.cancel();
}