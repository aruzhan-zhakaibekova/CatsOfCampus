const card = document.querySelectorAll(".card-inner");

for(let i = 0; i < card.length; i++){
  card[i].addEventListener( 'click', function() {
  card[i].classList.toggle('is-flipped');
});
}


document.addEventListener("DOMContentLoaded", function () {
  const progressbarinner = document.querySelector('.progress-bar-inner');

  window.addEventListener('scroll', function () {
    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;

    let percent = st / (sh - h.clientHeight) * 100;
    let roundedpercent = Math.round(percent);

    progressbarinner.style.width = roundedpercent + "%";
    progressbarinner.innerText = roundedpercent + "%";
  })

});

const text = document.querySelector(".text-anim");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i=0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = "null";
}
