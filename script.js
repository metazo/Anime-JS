const canvas = document.getElementById('canvas');
const score = document.getElementById('score');
const days = document.getElementById('days');
const endScreen = document.getElementById('endScreen');


virusPop();

function virusPop() {
    let virus = new image();

    virus.src = "./media/basic-pics/pngwave.png";

    virus.classlist.add('virus');
    virus.style.top = Math.random() * 500 + 'px';
    virus.style.left = Math.random() * 500 + 'px';

    let x, y;
    x = y = (Math.random() * 45);
    
}