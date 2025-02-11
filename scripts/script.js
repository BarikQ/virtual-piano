let isFired = false;

function keyplaying(event){
    if (!isFired) {
    const audio = document.querySelector(`audio[data-letter="${event.key}"]`);
    const key = document.querySelector(`.piano-key[data-letter="${event.key}"]`);

    if(!audio) return;
    isFired = true;
    audio.currentTime = 0;
    audio.play();

    if(key.classList[1]=="sharp"){
        key.classList.add('playing--sharp');
    } else{
        key.classList.add('playing');
    }
    }
}

function setFalse(event) {
    isFired = false;
}


function clickplaying(event){
    if (event.target.classList[0] != "piano-key") return;

    const audio = document.querySelector(`audio[data-letter="${event.target.dataset.letter}"]`);
    audio.currentTime = 0;
    audio.play();
}


function fullScreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
}


function fullscreenMode(event){
    if (event.target.classList[1] != 'openfullscreen') return;
    if (event.target.classList[event.target.classList.length - 1] != 'closefullscreen'){
        let html = document.documentElement;
        fullScreen(html);
        event.target.classList.add('closefullscreen');
    }else if (event.target.classList[event.target.classList.length - 1] == 'closefullscreen'){
        var html = document.documentElement;
        document.exitFullscreen();
        event.target.classList.remove('closefullscreen');
    }
}


window.addEventListener('keydown', keyplaying);
window.addEventListener('keyup', setFalse);

window.addEventListener('click', clickplaying);

window.addEventListener('click', fullscreenMode);


const keys = document.querySelectorAll(".piano-key");
for (let i = 0; i < keys.length; i++) {
    window.addEventListener('click', function(event){
        if (event.target.classList[0] != 'button') return;
        
        if (event.target.classList[event.target.classList.length - 1] != 'button--active'){
            document.querySelector('.button--active').classList.remove('button--active');
            event.target.classList.add('button--active')
        }
    
        if(document.querySelector('.button--active').classList[1] == 'button--laters'){
            keys[i].classList.add('piano-key--letter');
        } else if(document.querySelector('.button--active').classList[1] == 'button--notes'){
            keys[i].classList.remove('piano-key--letter');
        }
    });
}











