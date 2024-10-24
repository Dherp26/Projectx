var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var i = 0;
var txt = "You are the one for me, 你是我一生的挚爱, 你是我灵魂的伴侣, 我们一起变老吧！我们是命中注定在一起, 你对我而言如此重要 💜";
var speed = 90;

anime.timeline({ loop: true })
.add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
})
.add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
})
.add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
});

var elem = document.getElementById("bodi");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();   
    document.getElementById("tembok1").style.display = "none";
    document.getElementById("tembok2").style.display = "block";
    document.getElementById('mySound').play();
    Gassngetik();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    document.getElementById("tembok1").style.display = "none";
    document.getElementById("tembok2").style.display = "block";
    document.getElementById('mySound').play();
    Gassngetik();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    document.getElementById("tembok1").style.display = "none";
    document.getElementById("tembok2").style.display = "block";
    document.getElementById('mySound').play();
    Gassngetik();
  }
}

function Gassngetik() {
    if (i < txt.length) {
        document.getElementById("tekss").innerHTML += txt.charAt(i);
        i++;
        setTimeout(Gassngetik, speed);
    }
}
