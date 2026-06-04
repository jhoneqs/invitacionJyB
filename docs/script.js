const audio = document.getElementById('musica');
const btn = document.getElementById('musicBtn');

let reproduciendo = false;

window.addEventListener('load', () => {
    audio.play()
    .then(() => {
        btn.innerHTML = "🎵";
        reproduciendo = true;
    })
    .catch(() => {
        btn.innerHTML = "🔇";
        reproduciendo = false;
    });
});

btn.addEventListener('click', () => {
    if(reproduciendo){
        audio.pause();
        btn.innerHTML = "🔇";
        reproduciendo = false;
    } else {
        audio.play();
        btn.innerHTML = "🎵";
        reproduciendo = true;
    }
});

/* 🔒 PROTECCIÓN */

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());

document.addEventListener('keydown', function(e){
    if(e.key === "F12") e.preventDefault();
    if(e.ctrlKey && e.shiftKey && e.key === "I") e.preventDefault();
    if(e.ctrlKey && e.key === "u") e.preventDefault();
    if(e.ctrlKey && e.key === "s") e.preventDefault();
});


